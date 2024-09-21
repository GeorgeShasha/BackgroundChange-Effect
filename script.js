const imgBox = document.querySelector('.img-box');
const imgWrap = document.querySelector('.img-wrap');
const originalImg = document.getElementById('original-img');
const arrowLine = document.getElementById("arrow-line");

originalImg.style.width = imgBox.offsetWidth + 'px';

const leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (e) {
    const boxWidth = (e.pageX - leftSpace) + 'px';
    imgWrap.style.width = boxWidth;
    arrowLine.style.left = boxWidth;
}


