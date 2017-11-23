var btns;
var images;
var food;
window.onload = init;
function init(){
    initVariables();
    initFlip();
}

function initVariables(){
    images = document.getElementsByClassName('image-container-flipper');
    btns = document.getElementsByTagName('div');

}

function initFlip(){
    for(let i in btns)
    {
       btns[i].addEventListener("click",function(){
            const topic = btns[i].dataset.type;
            console.log(topic + 'este es el dataset');
            //removeClass(topic);
            flip(topic);
       });
    }
}

function flip(topic){
    console.log('removing classes');
    for(let j in btns){
        if(btns[j].dataset.type != topic){
            btns[j].classList.remove('front');            
            btns[j].classList.add('back');
        }
        else{
            btns[j].classList.add('front');
            btns[j].classList.remove('back');            
            
        }

    }
}




