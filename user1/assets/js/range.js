$(document).ready(function(){
    //양방향 range

    // 입력 요소와 슬라이더의 Thumb 및 범위 요소를 가져옵니다.
    const leftInput = document.getElementById("price_range1");
    const rightInput = document.getElementById("price_range2");
    const leftInput2 = document.getElementById("price_range3");
    const rightInput2 = document.getElementById("price_range4");

    const leftThumb = document.querySelector(".price_range_box .range-control > .thumb.left");
    const rightThumb = document.querySelector(".price_range_box .range-control > .thumb.right");
    const rangeFill = document.querySelector(".price_range_box .range-control > .range");

    const leftThumb2 = document.querySelector(".review_range_box .range-control > .thumb.left");
    const rightThumb2 = document.querySelector(".review_range_box .range-control > .thumb.right");
    const rangeFill2 = document.querySelector(".review_range_box .range-control > .range");

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

    //리뷰 leftrange
    const updateLeftValue2 = () => {
        const _this = leftInput2; // 현재 왼쪽 입력 요소를 참조합니다.
        const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; // 입력 범위의 최소값과 최대값을 파싱합니다.
        
        // 오른쪽 슬라이더의 값보다 10 작은 값으로 설정하여 교차되지 않도록 합니다.
        _this.value = Math.min(parseInt(_this.value), parseInt(rightInput2.value) - 1);
        
        // 입력 값의 퍼센트를 계산하여 Thumb와 범위의 위치를 설정합니다.
        const percent = ((_this.value - min) / (max - min)) * 100;
        leftThumb2.style.left = percent + "%"; // 왼쪽 Thumb의 위치를 퍼센트로 설정합니다.
        rangeFill2.style.left = percent + "%"; // 왼쪽 범위의 위치를 퍼센트로 설정합니다.
    };

    // 오른쪽 슬라이더의 값을 설정하고 관련된 Thumb와 범위를 업데이트합니다.
    const updateRightValue = () => {
        const _this = rightInput; // 현재 오른쪽 입력 요소를 참조합니다.
        const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; // 입력 범위의 최소값과 최대값을 파싱합니다.
        
        // 왼쪽 슬라이더의 값보다 1 큰 값으로 설정하여 교차되지 않도록 합니다.
        _this.value = Math.max(parseInt(_this.value), parseInt(leftInput.value) + 9500);
        
        // 입력 값의 퍼센트를 계산하여 Thumb와 범위의 위치를 설정합니다.
        const percent = (((_this.value - min) / (max - min)) * 100);
        console.log(percent);
        console.log(_this.value);
        console.log("최소" + min);
        console.log("최대" + max);
        console.log("(((_this.value - min) / (max - min)) * 100 )" + (((_this.value - min) / (max - min)) * 100 ));
        console.log("(_this.value - min)" + (_this.value - min));
        console.log("(max - min)" + (max - min));
        console.log("(_this.value - 1) + 10: " + ((_this.value - 1) + 10));
        // if (_this.value == 100) {
        //     rightThumb.style.right = 101 - percent + "%"; // 오른쪽 Thumb의 위치를 퍼센트로 설정합니다.
        //     rangeFill.style.right = 101 - percent + "%"; // 오른쪽 범위의 위치를 퍼센트로 설정합니다.
        // }else{
        //     rightThumb.style.right = 100 - percent + "%"; // 오른쪽 Thumb의 위치를 퍼센트로 설정합니다.
        //     rangeFill.style.right = 100 - percent + "%"; // 오른쪽 범위의 위치를 퍼센트로 설정합니다.
        // }
        rightThumb.style.right = 100 - percent + "%"; // 오른쪽 Thumb의 위치를 퍼센트로 설정합니다.
        rangeFill.style.right = 100 - percent + "%"; // 오른쪽 범위의 위치를 퍼센트로 설정합니다.
    };

    //리뷰 rightrange
    const updateRightValue2 = () => {
        const _this = rightInput2; // 현재 오른쪽 입력 요소를 참조합니다.
        const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; // 입력 범위의 최소값과 최대값을 파싱합니다.
        
        // 왼쪽 슬라이더의 값보다 1 큰 값으로 설정하여 교차되지 않도록 합니다.
        _this.value = Math.max(parseInt(_this.value), parseInt(leftInput2.value) + 1);
        
        // 입력 값의 퍼센트를 계산하여 Thumb와 범위의 위치를 설정합니다.
        const percent = Math.floor((((_this.value - min) / (max - min)) * 100 ) - (_this.value - 1) + 10);
        console.log(percent);
        console.log(_this.value);
        console.log("최소" + min);
        console.log("최대" + max);
        console.log("(((_this.value - min) / (max - min)) * 100 )" + (((_this.value - min) / (max - min)) * 100 ));
        console.log("(_this.value - min)" + (_this.value - min));
        console.log("(max - min)" + (max - min));
        console.log("(_this.value - 1) + 10: " + ((_this.value - 1) + 10));
        if (_this.value == 10) {
            rightThumb2.style.right = 101 - percent + "%"; // 오른쪽 Thumb의 위치를 퍼센트로 설정합니다.
            rangeFill2.style.right = 101 - percent + "%"; // 오른쪽 범위의 위치를 퍼센트로 설정합니다.
        }else{
            rightThumb2.style.right = 100 - percent + "%"; // 오른쪽 Thumb의 위치를 퍼센트로 설정합니다.
            rangeFill2.style.right = 100 - percent + "%"; // 오른쪽 범위의 위치를 퍼센트로 설정합니다.
        }
        console.log("rangeFill2.style.right : " + rightThumb2.style.right);
        
    };
    // 왼쪽 입력 요소와 오른쪽 입력 요소에 입력 이벤트 리스너를 추가합니다.
    leftInput.addEventListener("input", updateLeftValue);
    rightInput.addEventListener("input", updateRightValue);
    leftInput2.addEventListener("input", updateLeftValue2);
    rightInput2.addEventListener("input", updateRightValue2);

    

     /*range출력 */
     const rangeInputs = document.querySelectorAll('input[type="range"].value-range');
     const numberInputs = document.querySelectorAll('input[type="number"].value_display');
     const numberLeft = document.querySelector(".price_range1");
     const numberRight = document.querySelector(".price_range2");
     const numberLeft2 = document.querySelector(".price_range3");
     const numberRight2 = document.querySelector(".price_range4");
 
    //  rangeInputs.forEach((input, index) => {
    //      input.addEventListener('input', function() {
    //          numberInputs[index].textContent = input.value;
    //      });
    //  });
 
     rangeInputs.forEach((rangeInput, index) => {
         const numberInput = numberInputs[index];
         
         rangeInput.addEventListener('input', function() {
             numberInput.value = rangeInput.value;
         });
         numberInput.addEventListener('input', function() {
            //  console.log(numberInput[1].value);
            //  console.log(numberInput[2].value);
             console.log(numberInput.value);
             console.log(rangeInput.value);
             console.log("최소: "+numberLeft.value);
             console.log("최대: "+ numberRight.value );
             if(numberInput === numberLeft){
                if(parseInt(numberInput.value) >= (parseInt(numberRight.value)- 5500)){
                    console.log("최소값이 너무커");
                    numberInput.value = (parseInt(numberRight.value) - 5500);
                    
                }else if(parseInt(numberInput.value) < 500){
                    
                    console.log("최소값이 낫음")
                    numberInput.value = 500;
                }
                // updateLeftValue();
                // updateRightValue(); 
                console.log("오른쪽: "+rightThumb.style.right);
                
             }else if(numberInput === numberRight){
                if(parseInt(numberInput.value) <= (parseInt(numberLeft.value)+ 5500)){
                    
                    console.log("최대값이 너무작아")
                    numberInput.value = (parseInt(numberLeft.value) + 5500);
                    
                }else if(parseInt(numberInput.value) > 50000){
                    
                    console.log("최대값이 초과")
                    numberInput.value = 50000;
                }
                // updateLeftValue();
                // updateRightValue(); 
                console.log("왼쪽: "+leftThumb.style.left);
             }
             rangeInput.value = numberInput.value;
             console.log(typeof(rangeInput.value));
             console.log(numberInput + " | " + rangeInput.value);
         });
         
     });
     

     var slider = document.getElementById('review-slider');
     var minPriceInput = document.getElementById('min-price');
     var maxPriceInput = document.getElementById('max-price');
     var margin = 1;

     noUiSlider.create(slider, {
         start: [0, 10], // 초기값
         connect: true,
         range: {
             'min': 0,
             'max': 10
         },
         step: 1, // 스텝 간격
         margin: margin, // 두 핸들 간의 간격을 300으로 설정
         format: {
             to: function (value) {
                 return value.toFixed(0); // 소수점 없이 정수로 표시
             },
             from: function (value) {
                 return Number(value); // 문자열을 숫자로 변환
             }
         }
     });

     // 슬라이더의 값을 input 필드에 반영
     slider.noUiSlider.on('update', function (values) {
         minPriceInput.value = values[0];
         maxPriceInput.value = values[1];
     });

     // input 필드의 값을 슬라이더에 반영
     minPriceInput.addEventListener('change', function () {
         var minValue = parseFloat(this.value);
         var maxValue = parseFloat(maxPriceInput.value);
         if (maxValue - minValue < margin) {
             if(minValue == maxPriceInput.max){
                 minPriceInput.value = maxPriceInput.max - margin;
             }else {
                 maxValue = minValue + margin;
                 maxPriceInput.value = maxValue;
             }  
         }
         slider.noUiSlider.set([this.value, null]);
     });

     maxPriceInput.addEventListener('change', function () {
         var maxValue = parseFloat(this.value);
         var minValue = parseFloat(minPriceInput.value);
         if (maxValue - minValue < margin) {
             minValue = maxValue - margin;
             minPriceInput.value = minValue;
         }
         slider.noUiSlider.set([null, this.value]);
     });

});
    