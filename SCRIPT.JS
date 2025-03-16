let img = document.querySelector('.pic_changer');
let bod=document.querySelector('body');
function img_changer(param){
    img.src=`photos/${param}.png`
}
function pick_collor(color){
    bod.style.background = color;
}