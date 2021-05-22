let allSlides = document.getElementsByClassName('swiper-slide');// коллекция со всеми слайдами
let slider = document.getElementsByClassName('swiper-wrapper')[0];// слайдер в котором лежат слайды
let swipe = 0;// активный слайдер(номер в массиве со слайдами),для перелистывания
let width;//ширина слайдера
console.log(allSlides);
//расчитать ширину и подстроить слайдер
function init() {
    console.log('work');
    width = document.getElementsByClassName('swiper-container')[0].offsetWidth;//ширина = ширине контейнера(оболочки) слайдера
    //width = document.getElementsByClassName('swiper-container')[0].clientWidth;//способ ширины без рамок
    console.log(width);
    slider.style.width = width*allSlides.length+"px";//ширина коллекции слайдов = ширине контейнера(оболочки)*кол-во слайдов
    console.log(slider.style.width);
    for (let i = 0; i < allSlides.length; i++) {//перебираем массив со слайдами
        console.log(allSlides[i]);
        allSlides[i].style.width = width + "px";//каждому слайду задаем ширину , равную вычисленной
        //allSlides[i].style.height = "auto";//высота авто или 100%
        console.log(allSlides[i].style.width);//проверка
    }
    console.log(width);
    console.log(slider.style.width);
    roll();
}
window.addEventListener('resize', init);
init();


let btnNext = document.getElementsByClassName('swiper-button-next')[0];
btnNext.addEventListener('click', function () {
    swipe = swipe + 1;
    if(swipe >= allSlides.length){
        swipe = 0;
    }
    roll();
});

let btnPrev = document.getElementsByClassName('swiper-button-prev')[0];
btnPrev.addEventListener('click', function () {
    swipe = swipe - 1;
    if(swipe < 0){
        swipe = allSlides.length-1;
    }
    roll();
});

function roll(){
    slider.style.marginLeft = `-${swipe*width}px`;
    console.log(slider.style.marginLeft);
};
function roll2(){
    slider.style.marginLeft = `-${swipe*width}px`;
    console.log(slider.style.marginLeft);
};

//===================================================

let burger = document.querySelector('.li_logo__burger');
console.log(burger);
burger.onclick = display;
function display(){
    document.getElementsByClassName('burger-menu')[0].classList.toggle('display');
    document.getElementsByClassName('burger-menu__nav')[0].classList.toggle('display');
    document.getElementsByTagName('body')[0].classList.toggle('fixed');
    document.getElementsByClassName('button-burger')[0].classList.toggle('display');
}