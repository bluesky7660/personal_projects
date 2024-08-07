document.addEventListener('DOMContentLoaded', function () {


    //비밀번호 on/off
    const togglePasswordElements = document.querySelectorAll('.toggle-password');
    const passwordInputs = document.querySelectorAll('.login_password');

    togglePasswordElements.forEach(function (togglePassword, index) {
        togglePassword.addEventListener('click', function () {
            // 현재 입력 필드의 type 속성 값을 확인하고, toggle
            const passwordInput = passwordInputs[index];
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // 버튼 아이콘 변경
            this.style.backgroundImage = type === 'password' 
                ? "url('./assets/images/ico_eye@2x.png')" 
                : "url('./assets/images/ico_eye_active@2x.png')";
        });
    });
    

    //탭 메뉴
    const tabButtons = document.querySelectorAll('.tab_button');
    const tabContents = document.querySelectorAll('.tab_content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // 모든 탭 버튼에서 'active' 클래스를 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // 모든 탭 콘텐츠에서 'active' 클래스를 제거
            tabContents.forEach(content => content.classList.remove('active'));

            // 클릭된 버튼에 'active' 클래스를 추가
            this.classList.add('active');

            // 해당 콘텐츠를 표시
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // 기본적으로 첫 번째 탭과 콘텐츠를 활성화
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }

    /*스크롤 헤더*/
    /*탑버튼 */
    var prevScrollpos = window.scrollY; 
    // console.log(window.scrollY); 
    if(prevScrollpos >= 225){
        document.querySelector(".top_btn").style.display = "flex";
    }else{
        document.querySelector(".top_btn").style.display = "none";
    }

    window.addEventListener('scroll',  function() { 
        var currentScrollpos = window.scrollY;
        // console.log("sksksksks" + currentScrollpos);
        if(currentScrollpos >= 225| prevScrollpos >= 225){
            document.querySelector(".top_btn").style.display = "flex";
        }else{
            document.querySelector(".top_btn").style.display = "none";
        }
        prevScrollpos = currentScrollpos; 
    });
    document.querySelector(".top_btn").addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

      
    //접고 펼치키
    const toggleButtons = document.querySelectorAll('.collapse_btn');
    const contents = document.querySelectorAll('.info_text');
    console.log(toggleButtons);
    console.log(contents);
    
    contents.forEach((content) => {
        content.classList.add('hidden');
    });
    toggleButtons.forEach((btuton) => {
        btuton.classList.add('hidden');
    });

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const content = contents[index];
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                button.classList.remove('hidden');
                button.textContent = '접기';
                
            } else {
                content.classList.add('hidden');
                button.classList.add('hidden');
                button.textContent = '펼치기';
            }
        });
    });


    /*탭 선택시 영역으로 화면 스크롤 */
    let tabs = document.querySelectorAll(".detail_tabs");
    let review = document.querySelector(".book_review");
    let information = document.querySelector(".prod_detail_info_wrap");
    // let qna = document.querySelector(".qna");
    // let exchange = document.querySelector(".exchange");
    let scrollElementOffsetTop;
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            switch (i) {
                case 0:
                    scrollElementOffsetTop = information.offsetTop;
                    console.log(this);
                    // tabs[0].classList.add("active");
                    // tabs[1].classList.remove("active");
                    // tabs[2].classList.remove("active");
                    // tabs[3].classList.remove("active");
                    break;
                case 1:
                    scrollElementOffsetTop = review.offsetTop;
                    // tabs[0].classList.remove("active");
                    // tabs[1].classList.add("active");
                    // tabs[2].classList.remove("active");
                    // tabs[3].classList.remove("active");
                    break;
                case 2:
                    scrollElementOffsetTop = qna.offsetTop;
                    // tabs[0].classList.remove("active");
                    // tabs[1].classList.remove("active");
                    // tabs[2].classList.add("active");
                    // tabs[3].classList.remove("active");
                    break;
                case 3:
                    scrollElementOffsetTop = exchange.offsetTop;
                    // tabs[0].classList.remove("active");
                    // tabs[1].classList.remove("active");
                    // tabs[2].classList.remove("active");
                    // tabs[3].classList.add("active");
                    break;
            }
            scrollElementOffsetTop = scrollElementOffsetTop - 150;
            window.scrollTo({
                top: scrollElementOffsetTop,
                behavior: 'smooth'
            });
        });   
    }

    

    //양방향 range
    // 슬라이더와 출력 입력 필드를 참조하는 변수들
    // const inputLeft = document.getElementById("price_range1"); // 왼쪽 슬라이더
    // const inputRight = document.getElementById("price_range2"); // 오른쪽 슬라이더

    // const thumbLeft = document.querySelector(".thumb.left"); // 왼쪽 핸들
    // const thumbRight = document.querySelector(".thumb.right"); // 오른쪽 핸들

    // const range = document.querySelector(".range"); // 슬라이더의 범위 배경

    // const minValueDisplay = document.getElementById("minValue"); // 왼쪽 출력 입력 필드
    // const maxValueDisplay = document.getElementById("maxValue"); // 오른쪽 출력 입력 필드

    // // 슬라이더와 출력 입력 필드를 동기화하는 함수
    // const updateSlider = () => {
    //     // 슬라이더의 값을 가져오고 숫자로 변환
    //     const leftValue = +inputLeft.value; // 왼쪽 슬라이더의 값
    //     const rightValue = +inputRight.value; // 오른쪽 슬라이더의 값

    //     // 왼쪽 슬라이더의 백분율 위치 계산
    //     const minPercent = ((leftValue - +inputLeft.min) / (+inputLeft.max - +inputLeft.min)) * 100;
    //     // 오른쪽 슬라이더의 백분율 위치 계산
    //     const maxPercent = ((rightValue - +inputRight.min) / (+inputRight.max - +inputRight.min)) * 100;

    //     // 왼쪽 핸들의 위치를 설정
    //     thumbLeft.style.left = `${minPercent}%`;
    //     // 오른쪽 핸들의 위치를 설정
    //     thumbRight.style.right = `${100 - maxPercent}%`;

    //     // 슬라이더의 범위 배경의 위치를 설정
    //     range.style.left = `${minPercent}%`;
    //     range.style.right = `${100 - maxPercent}%`;

    //     // 출력 입력 필드에 슬라이더의 값을 표시
    //     minValueDisplay.value = leftValue;
    //     maxValueDisplay.value = rightValue;
    // };

    // // 왼쪽 슬라이더의 값이 변경되었을 때 호출되는 함수
    // const setLeftValue = (e) => {
    //     const { value } = e.target; // 이벤트 타겟에서 값을 가져옴

    //     // 오른쪽 슬라이더와의 최소 거리(10)를 유지하며 값 조정
    //     if (+inputRight.value - +value < 1) {
    //         inputLeft.value = +inputRight.value - 1; // 최소값을 조정
    //     }
    //     updateSlider(); // 슬라이더 및 출력 입력 필드를 업데이트
    // };

    // // 오른쪽 슬라이더의 값이 변경되었을 때 호출되는 함수
    // const setRightValue = (e) => {
    //     const { value } = e.target; // 이벤트 타겟에서 값을 가져옴

    //     // 왼쪽 슬라이더와의 최소 거리(10)를 유지하며 값 조정
    //     if (+value - +inputLeft.value < 10) {
    //         inputRight.value = +inputLeft.value + 10; // 최대값을 조정
    //     }
    //     updateSlider(); // 슬라이더 및 출력 입력 필드를 업데이트
    // };

    // // 출력 입력 필드의 값이 변경되었을 때 호출되는 함수
    // const handleInputChange = (e) => {
    //     const { id, value } = e.target; // 이벤트 타겟에서 id와 값을 가져옴
    //     if (id === "minValue") {
    //         // 최소값 입력 필드가 변경되었을 때
    //         inputLeft.value = Math.min(Math.max(+value, +inputLeft.min), +inputRight.value - 10); // 최소값을 설정
    //         updateSlider(); // 슬라이더 및 출력 입력 필드를 업데이트
    //     } else if (id === "maxValue") {
    //         // 최대값 입력 필드가 변경되었을 때
    //         inputRight.value = Math.max(Math.min(+value, +inputRight.max), +inputLeft.value + 10); // 최대값을 설정
    //         updateSlider(); // 슬라이더 및 출력 입력 필드를 업데이트
    //     }
    // };

    // // 이벤트 리스너를 추가하여 슬라이더와 출력 입력 필드의 변경을 처리합니다
    // if (inputLeft && inputRight) {
    //     inputLeft.addEventListener("input", setLeftValue); // 왼쪽 슬라이더의 값 변경 시 처리
    //     inputRight.addEventListener("input", setRightValue); // 오른쪽 슬라이더의 값 변경 시 처리
    // }

    // minValueDisplay.addEventListener("input", handleInputChange); // 최소값 출력 입력 필드의 값 변경 시 처리
    // maxValueDisplay.addEventListener("input", handleInputChange); // 최대값 출력 입력 필드의 값 변경 시 처리

    // // 페이지 로드 시 슬라이더와 출력 입력 필드를 동기화합니다
    // updateSlider();

    //양방향 range

    // 입력 요소와 슬라이더의 Thumb 및 범위 요소를 가져옵니다.
    const leftInput = document.getElementById("price_range1");
    const rightInput = document.getElementById("price_range2");

    const leftThumb = document.querySelector(".range-control > .thumb.left");
    const rightThumb = document.querySelector(".range-control > .thumb.right");
    const rangeFill = document.querySelector(".range-control > .range");

    // 왼쪽 슬라이더의 값을 설정하고 관련된 Thumb와 범위를 업데이트합니다.
    const updateLeftValue = () => {
    const _this = leftInput; // 현재 왼쪽 입력 요소를 참조합니다.
    const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; // 입력 범위의 최소값과 최대값을 파싱합니다.
    
    // 오른쪽 슬라이더의 값보다 10 작은 값으로 설정하여 교차되지 않도록 합니다.
    _this.value = Math.min(parseInt(_this.value), parseInt(rightInput.value) - 9500);
    
    // 입력 값의 퍼센트를 계산하여 Thumb와 범위의 위치를 설정합니다.
    const percent = ((_this.value - min) / (max - min)) * 100;
    leftThumb.style.left = percent + "%"; // 왼쪽 Thumb의 위치를 퍼센트로 설정합니다.
    rangeFill.style.left = percent + "%"; // 왼쪽 범위의 위치를 퍼센트로 설정합니다.
    };

    // 오른쪽 슬라이더의 값을 설정하고 관련된 Thumb와 범위를 업데이트합니다.
    const updateRightValue = () => {
    const _this = rightInput; // 현재 오른쪽 입력 요소를 참조합니다.
    const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; // 입력 범위의 최소값과 최대값을 파싱합니다.
    
    // 왼쪽 슬라이더의 값보다 1 큰 값으로 설정하여 교차되지 않도록 합니다.
    _this.value = Math.max(parseInt(_this.value), parseInt(leftInput.value) + 9500);
    
    // 입력 값의 퍼센트를 계산하여 Thumb와 범위의 위치를 설정합니다.
    const percent = ((_this.value - min) / (max - min)) * 100;
    console.log(percent);
    rightThumb.style.right = 100 - percent + "%"; // 오른쪽 Thumb의 위치를 퍼센트로 설정합니다.
    rangeFill.style.right = 100 - percent + "%"; // 오른쪽 범위의 위치를 퍼센트로 설정합니다.
    };

    // 왼쪽 입력 요소와 오른쪽 입력 요소에 입력 이벤트 리스너를 추가합니다.
    leftInput.addEventListener("input", updateLeftValue);
    rightInput.addEventListener("input", updateRightValue);


    /*range출력 */
    const rangeInputs = document.querySelectorAll('input[type="range"].value-range');
    const numberInputs = document.querySelectorAll('input[type="number"].value_display');

    rangeInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            numberInputs[index].textContent = input.value;
        });
    });

    rangeInputs.forEach((rangeInput, index) => {
        const numberInput = numberInputs[index];
        
        rangeInput.addEventListener('input', function() {
            numberInput.value = rangeInput.value;
        });
        
        numberInput.addEventListener('input', function() {
            console.log(numberInput.value);
            console.log(rangeInput.value);
            // if (numberInput.value === '') {
            //     numberInput.value = 0;
            // }
            rangeInput.value = numberInput.value;
        });
        console.log(rangeInput.value);
        
    });
    console.log(rangeInputs[0].value);
});