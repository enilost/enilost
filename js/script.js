function backgroundHeader() {
    window.setTimeout('backgroundHeader()' , 7000);
    let i = Math.round(Math.random()*4);
    let img = 'enilost/img/bitmap_8.png';
    let head = document.getElementById('head');
    console.log(head);
    if (i == 0) {
        img = 'enilost/img/bitmap_8.png';
    }
    if (i == 1) {
        img = 'enilost/img/Internet-Family.jpg';
    }
    if (i == 2) {
        img = 'enilost/img/gettyimages-697375694.jpg';
    }
    if (i == 3) {
        img = 'enilost/img/bitmap_19.jpg';
    }
    if (i == 4) {
        img = 'enilost/img/bitmap_39.jpg';
    }
    head.style.backgroundImage = `url(`+img+`)`;
    console.log(head.style.backgroundPosition);
};
backgroundHeader();
