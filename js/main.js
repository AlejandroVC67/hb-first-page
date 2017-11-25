var btns;
var images;
var food;
var flipper;
window.onload = init;
function init(){
    initVariables();
    initFlip();
}

function initVariables(){
    images = document.getElementsByClassName('image-container-flipper');
    btns = document.getElementsByTagName('div');
    flipper = document.getElementsByClassName('image-container-flipper');
    //console.log(flipper);

}

function initFlip(){
    for(let i in btns)
    {
       btns[i].addEventListener("click",function(){
            const topic = btns[i].dataset.type;
            console.log(topic + 'este es el dataset');
            //removeClass(topic);
            //rotation(flipper);
            flip(topic);
       });
    }
}

function rotation(flipper){
    for(let q in flipper){
        flipper[q].style.transform = "rotateY(180deg)";
    }
}



function flip(topic){
    
    console.log('removing classes');
    for(let j in btns){
        if(btns[j].dataset.type != topic){
            btns[j].classList.remove('front');            
            btns[j].classList.add('back');
            btns[j].style.position = 'fixed';
        }
        else{
            btns[j].classList.add('front');
            btns[j].classList.remove('back');            
            
        }

    }
}




