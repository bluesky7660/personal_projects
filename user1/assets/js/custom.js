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


});