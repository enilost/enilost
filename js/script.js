function heightHeader() {
    window.setTimeout('heightHeader()' , 200);
let main = document.querySelector('html');
let head = document.getElementById('head');
    head.style.height = main.clientHeight+'px';
};
heightHeader();
function backgroundHeader() {
    window.setTimeout('backgroundHeader()' , 7000);
    let i = Math.round(Math.random()*4);
    let img = 'img/bitmap_8.png';
    let header = document.getElementById('head');
    if (i == 0) {
        img = 'img/bitmap_8.png';
    }
    if (i == 1) {
        img = 'img/Internet-Family.jpg';
    }
    if (i == 2) {
        img = 'img/gettyimages-697375694.jpg';
    }
    if (i == 3) {
        img = 'img/bitmap_19.jpg';
    }
    if (i == 4) {
        img = 'img/bitmap_39.jpg';
    }
    header.style.backgroundImage = `url(`+img+`)`;
};
backgroundHeader();
