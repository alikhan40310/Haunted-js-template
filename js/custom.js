//  creating variable for different elements
let banner_img = document.getElementById("ban_img");
let banner = "1";
let music =  new Audio("sound/music.mp3");
let button = document.getElementById("btn");
function banner_change() {
    if(banner===1) {
        banner_img.src = "image/banner1.jpg";
    }
    else if (banner===2) {
        banner_img.src = "image/banner2.jpg";
    }
    else if (banner===3) {
        banner_img.src = "image/banner3.jpg";
    }
    else if (banner===4) {
        banner_img.src = "image/banner4.jpg";
    }
    else if (banner===5) {
        banner_img.src = "image/banner5.jpg";
    }
    else if (banner===6) {
        banner_img.src = "image/banner6.jpg";
    }
    else if (banner===7) {
        banner_img.src = "image/banner7.jpg";
    }
    // if banner less then required condition
    if (banner < 7) {
        banner++;
    }
    else {
        banner = 1;
    }
    // creating flag for the music
    let flag = 0;
    let banner_switch_speed = 7000;
        if(flag===1) {
            return;
        }
        flag = 1;
        music.play();
        music.loop = true;
        setInterval(() => {
            banner_change();
        }, banner_switch_speed);
}

