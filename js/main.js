var topics;
var display;
window.onload = init;
function init(){
    initVariables();
    initFeature();
}

function initVariables(){
topics = document.getElementsByTagName('figure');
//display = document.getElementsByTagName('body');
}

function initFeature(){
    for(let i = 0; i < topics.length; i++)
    {
       topics[i].addEventListener("click",function(){
        window.location.href = "information.html";
        if(topics[i].dataset.topic == "help"){
            window.location.href = "https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/panda.aspx";
            console.log("sdfiojsdfsdio");
        }
            //const theme = topics[i].dataset.topic;
            //displayInformation(theme);
       });
    }
}

function displayInformation(theme){
    var heading = document.createElement("h1");
    var img = document.createElement('img');
    var heading_text;
    if(theme === 'help'){
        var heading_text = document.createTextNode("HELP");
        img.className = "dynamic-img";
        img.setAttribute("src", "../resources/panda.svg");
    }
   else if(theme === 'information'){
     heading_text = document.createTextNode("INFORMATION");
    
   }
   else if(theme === 'food'){
    var heading_text = document.createTextNode("FOOD");    
   }
   else if(theme === 'location'){
    var heading_text = document.createTextNode("LOCATION");
    
    }
    heading.appendChild(heading_text);
    document.getElementsByClassName('third-section').appendChild(img);
    display.appendChild(heading);
}




