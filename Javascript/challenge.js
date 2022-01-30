var win = false;
var continue_playing = false;
var level = 1;
var buttons_memory = [];
var pressed_buttons = [];
var green_button = document.getElementById("green");
var red_button = document.getElementById("red");
var yellow_button = document.getElementById("yellow");
var blue_button = document.getElementById("blue");

document.getElementsByTagName("body")[0].style.backgroundColor = "#021c39";

function startGame(){
    continue_playing = true;
    if(win == false){
        document.getElementById("title").innerHTML = `Level ${level}`;
    }
}
document.addEventListener("keydown", startGame);

function youWin(){
    win = true;
    continue_playing = true;
    level += 1;
    document.getElementById("title").innerHTML = `Level ${level}`;
}

function youLose(){
    win = false;
    buttons_memory = [];
    pressed_buttons = [];
    continue_playing = false;
    level = 1;
    document.getElementsByTagName("body")[0].classList.add("game-over");
    setTimeout(() => {document.getElementsByTagName("body")[0].style.backgroundColor = "#021c39";
    }, 100);
    setTimeout(() => {document.getElementsByTagName("body")[0].style.opacity = 1;
    }, 100);
    var wrong_audio = new Audio('sounds/wrong.mp3');
    wrong_audio.play();
    document.getElementById("title").innerHTML = "Game Over, Press Any Key to Restart";
}


green_button.addEventListener("click", function(){
    if(continue_playing==true){
        green_button.classList.add("pressed");
        setTimeout(() => {green_button.classList.remove("pressed");
        }, 70);
        var green_audio = new Audio('sounds/green.mp3');
        green_audio.play();
        pressed_buttons.push("0");
    }
});
red_button.addEventListener("click", function(){
    if(continue_playing==true){
        red_button.classList.add("pressed");
        setTimeout(() => {red_button.classList.remove("pressed");
        }, 70);
        var red_audio = new Audio('sounds/red.mp3');
        red_audio.play();
        pressed_buttons.push("1");
    }
});
yellow_button.addEventListener("click", function(){
    if(continue_playing==true){
        yellow_button.classList.add("pressed");
        setTimeout(() => {yellow_button.classList.remove("pressed");
        }, 70);
        var yellow_audio = new Audio('sounds/yellow.mp3');
        yellow_audio.play();
        pressed_buttons.push("2");
    }
});
blue_button.addEventListener("click", function(){
    if(continue_playing==true){
        blue_button.classList.add("pressed");
        setTimeout(() => {blue_button.classList.remove("pressed");
        }, 70);
        var blue_audio = new Audio('sounds/blue.mp3');
        blue_audio.play();
        pressed_buttons.push("3");
    }
});

function randomButton(){
    if(continue_playing == true){
        var random = Math.floor(Math.random() * 5);
        buttons_memory.push(random);
        var button = 1;
        if(random == 0){
            var green_audio = new Audio('sounds/green.mp3');
            green_audio.play();
            button = document.getElementById("green");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("green").style.opacity = 1;
            }, 100);
        }else if(random == 1){
            var red_audio = new Audio('sounds/red.mp3');
            red_audio.play();
            button = document.getElementById("red");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("red").style.opacity = 1;
            }, 100);
        }else if(random == 2){
            var yellow_audio = new Audio('sounds/yellow.mp3');
            yellow_audio.play();
            button = document.getElementById("yellow");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("yellow").style.opacity = 1;
            }, 100);
        }else{
            var blue_audio = new Audio('sounds/blue.mp3');
            blue_audio.play();
            button = document.getElementById("blue");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("blue").style.opacity = 1;
            }, 100);
        }
    }
}


