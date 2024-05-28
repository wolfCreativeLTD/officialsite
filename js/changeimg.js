var changeImg1 = document.getElementById('changeImg1');
var img = changeImg1.querySelector('img');
var newImgSrc = 'images/header_icon_1.png';

changeImg1.onmouseenter = function() {
    img.style.opacity = 0; // 將圖片透明度設為0
    setTimeout(function() {
        img.src = newImgSrc; // 切換圖片
        img.style.opacity = 1; // 將圖片透明度設為1
    }, 150); // 與CSS中的hover速度一致
};

changeImg1.onmouseleave = function() {
    img.style.opacity = 0; // 將圖片透明度設為0
    setTimeout(function() {
        img.src = 'images/header_icon_1h.png'; // 切換回原來的圖片
        img.style.opacity = 1; // 將圖片透明度設為1
    }, 130); // 與CSS中的hover速度一致
};


var changeImg2 = document.getElementById('changeImg2');
var img2 = changeImg2.querySelector('img');
var newimg2Src = 'images/header_icon_2p.png';

changeImg2.onmouseenter = function() {
    setTimeout(function() {
        img2.src = newimg2Src; // 切換圖片
    }, 150); // 與CSS中的hover速度一致
};

changeImg2.onmouseleave = function() {
    setTimeout(function() {
        img2.src = 'images/header_icon_2.png'; // 切換回原來的圖片
    }, 130); // 與CSS中的hover速度一致
};


var changeImg3 = document.getElementById('changeImg3');
var img3 = changeImg3.querySelector('img');
var newimg3Src = 'images/header_icon_3.png';

changeImg3.onmouseenter = function() {
    img3.style.opacity = 0; // 將圖片透明度設為0
    setTimeout(function() {
        img3.src = newimg3Src; // 切換圖片
        img3.style.opacity = 1; // 將圖片透明度設為1
    }, 150); // 與CSS中的hover速度一致
};

changeImg3.onmouseleave = function() {
    img3.style.opacity = 0; // 將圖片透明度設為0
    setTimeout(function() {
        img3.src = 'images/header_icon_3h.png'; // 切換回原來的圖片
        img3.style.opacity = 1; // 將圖片透明度設為1
    }, 130); // 與CSS中的hover速度一致
};


var changeImg4 = document.getElementById('changeImg4');
var img4 = changeImg4.querySelector('img');
var newimg4Src = 'images/header_icon_4p.png';

changeImg4.onmouseenter = function() {
    setTimeout(function() {
        img4.src = newimg4Src; // 切換圖片
    }, 150); // 與CSS中的hover速度一致
};

changeImg4.onmouseleave = function() {
    setTimeout(function() {
        img4.src = 'images/header_icon_4.png'; // 切換回原來的圖片
    }, 130); // 與CSS中的hover速度一致
};


var changeImg5 = document.getElementById('changeImg5');
var img5 = changeImg5.querySelector('img');
var newimg5Src = 'images/header_icon_5.png';

changeImg5.onmouseenter = function() {
    img5.style.opacity = 0; // 將圖片透明度設為0
    setTimeout(function() {
        img5.src = newimg5Src; // 切換圖片
        img5.style.opacity = 1; // 將圖片透明度設為1
    }, 150); // 與CSS中的hover速度一致
};

changeImg5.onmouseleave = function() {
    img5.style.opacity = 0; // 將圖片透明度設為0
    setTimeout(function() {
        img5.src = 'images/header_icon_5h.png'; // 切換回原來的圖片
        img5.style.opacity = 1; // 將圖片透明度設為1
    }, 130); // 與CSS中的hover速度一致
};

