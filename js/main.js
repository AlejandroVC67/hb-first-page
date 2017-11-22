const images = document.getElementsByClassName('image-container');
window.onload = init;

function init(){
    for(let i = 0; i < images.length; i++){
        images[i].addEventListener('touchstart',function(){
            images[i].classList.toggle('hover');
        });
        console.log('sdgdogdoidgfg');
    }    
}

