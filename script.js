document.querySelector("#drum").addEventListener("click", drum_play);
document.querySelector("#flute").addEventListener("click", flute_play);
document.querySelector("#piano").addEventListener("click", piano_play);
document.querySelector("#trumpet").addEventListener("click", trumpet_play);
document.querySelector("#guitar").addEventListener("click", guitar_play);
document.querySelector("#violin").addEventListener("click", violin_play);
document.querySelector("#xylophone").addEventListener("click", xylophone_play);

document.addEventListener("keypress", function(e){
    switch(e.key) {
        case "d": 
            drum_play(); 
            break;
        case "f": 
            flute_play(); 
            break;
        case "g": 
            piano_play(); 
            break;
        case "h": 
            trumpet_play(); 
            break;
        case "j": 
            guitar_play(); 
            break;
        case "k": 
            violin_play(); 
            break;
        case "l": 
            xylophone_play(); 
            break;
    }
});

function drum_play(){
    var audio = new Audio("./sounds/Drum.mp3");
    audio.play() 
    document.querySelector("#drum").style.opacity = "50%";
    setTimeout(function Opacity(){document.querySelector("#drum").style.opacity = "100%"}, 1000);
}

function flute_play(){
    var audio = new Audio("./sounds/Flute.wav");
    audio.play() 
    document.querySelector("#flute").style.opacity = "50%";
    setTimeout(function Opacity(){document.querySelector("#flute").style.opacity = "100%"}, 1000);
}

function piano_play(){
    var audio = new Audio("./sounds/Piano.mp3");
    audio.play() 
    document.querySelector("#piano").style.opacity = "50%";
    setTimeout(function Opacity(){document.querySelector("#piano").style.opacity = "100%"}, 1000);
}

function trumpet_play(){
    var audio = new Audio("./sounds/Trumpet.mp3");
    audio.play() 
    document.querySelector("#trumpet").style.opacity = "50%";
    setTimeout(function Opacity(){document.querySelector("#trumpet").style.opacity = "100%"}, 2000);
}

function guitar_play(){
    var audio = new Audio("./sounds/Guitar.wav");
    audio.play() 
    document.querySelector("#guitar").style.opacity = "50%";
    setTimeout(function Opacity(){document.querySelector("#guitar").style.opacity = "100%"}, 2000);
}

function violin_play(){
    var audio = new Audio("./sounds/Violin.wav");
    audio.play() 
    document.querySelector("#violin").style.opacity = "50%";
    setTimeout(function Opacity(){document.querySelector("#violin").style.opacity = "100%"}, 1000);
}

function xylophone_play(){
    var audio = new Audio("./sounds/Xylophone.mp3");
    audio.play() 
    document.querySelector("#xylophone").style.opacity = "50%";
    setTimeout(function Opacity(){document.querySelector("#xylophone").style.opacity = "100%"}, 2000);
}