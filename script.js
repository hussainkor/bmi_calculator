const widthData = document.querySelector('.width-data');
const heightData = document.querySelector('.height-data');
const submitBtn = document.querySelector('.submit-btn');
const widthDoc = document.querySelector('.width-alert');
const heightDoc = document.querySelector('.height-alert');
const genderCheck = document.querySelectorAll('.radio-input');
const bmiResult = document.querySelector('.bmi-result');
const bmiScoreBox = document.querySelector('.bmi-score-box');
const bmiStatus = document.querySelector('.bmi-status');

submitBtn.addEventListener('click', () => {
    const width = Number(widthData.value);
    const height = Number(heightData.value);
    selectData();
    checkAlert();
    if (width && height) {
        bmiScoreBox.style.display = 'block';
        const totalHeight = (height / 100) * (height / 100);
        const bmi = width / totalHeight;
        bmiResult.innerHTML = bmi.toFixed(2);
        if (bmi < 18.5) {
            bmiStatus.style.color = '#E77817';
            bmiStatus.innerHTML = 'Underweight';
        }
        else if (bmi >= 25) {
            bmiStatus.style.color = 'red';
            bmiStatus.innerHTML = 'Overweight';
        }
        else {
            bmiStatus.style.color = 'green';
            bmiStatus.innerHTML = 'Great shape';
        }
        console.log(bmi.toFixed(2));
    }
})

const checkAlert = function () {
    if (!widthData.value) {
        widthDoc.style.display = 'block';
    } else {
        widthDoc.style.display = 'none';
    }
    if (!heightData.value) {
        heightDoc.style.display = 'block';
    } else {
        heightDoc.style.display = 'none';
    }
}

const selectData = function () {
    let answer;
    genderCheck.forEach(el => {
        if (el.checked) {
            answer = el.id;
        }
    })
    return answer;
}