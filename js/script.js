let main = document.querySelector('html');
let head = document.getElementById('head');
head.style.height = main.clientHeight+'px';
function backgroundHeader() {
    window.setTimeout('backgroundHeader()' , 7000);
    let i = Math.round(Math.random()*4);
    let img = 'img/bitmap_8.png';
    let header = document.getElementById('head');
    console.log(head);
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
    console.log(header.style.backgroundImage);
    console.log(head.style.height);
};
backgroundHeader();
