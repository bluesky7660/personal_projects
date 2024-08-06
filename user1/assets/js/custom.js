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

    /*range출력 */
    const rangeInputs = document.querySelectorAll('input[type="range"].value-range');
    const numberInputs = document.querySelectorAll('input[type="number"].value-display');

    // rangeInputs.forEach((input, index) => {
    //     input.addEventListener('input', function() {
    //         rangeValues[index].textContent = input.value;
    //     });
    // });

    // rangeInputs.forEach((rangeInput, index) => {
    //     const numberInput = numberInputs[index];
        
    //     rangeInput.addEventListener('input', function() {
    //         numberInput.value = rangeInput.value;
    //     });

    //     numberInput.addEventListener('input', function() {
    //         if (numberInput.value === '') {
    //             numberInput.value = 0;
    //         }
    //         rangeInput.value = numberInput.value;
    //     });
    // });

    //양방향 range
    const inputLeft = document.getElementById("price_range1");
    const inputRight = document.getElementById("price_range2");

    const thumbLeft = document.querySelector(".thumb.left");
    const thumbRight = document.querySelector(".thumb.right");

    const range = document.querySelector(".range");

    const setLeftValue = e => {
    const _this = e.target;
    const { value, min, max } = _this;

    if (+inputRight.value - +value < 10) {
        _this.value = +inputRight.value - 10;
    }

    const percent = ((+_this.value - +min) / (+max - +min)) * 100;

    thumbLeft.style.left = `${percent}%`;
    range.style.left = `${percent}%`;
    };

    const setRightValue = e => {
    const _this = e.target;
    const { value, min, max } = _this;

    if (+value - +inputLeft.value < 10) {
        _this.value = +inputLeft.value + 10;
    }

    const percent = ((+_this.value - +min) / (+max - +min)) * 100;

    thumbRight.style.right = `${100 - percent}%`;
    range.style.right = `${100 - percent}%`;
    };

    if (inputLeft && inputRight) {
    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);
    }

});