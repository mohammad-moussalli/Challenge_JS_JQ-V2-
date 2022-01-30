var win = false;
var continue_playing = false;
var level = 0;
var buttons_memory = [];
var pressed_buttons = [];
var green_button = $("#green");
var red_button = $("#red");
var yellow_button = $("#yellow");
var blue_button = $("#blue");

$("body").css("background-color", "#021c39");

function startGame(){
    if(continue_playing == false){
        continue_playing = true;
        $("#title").html("Level 1");
        randomButton();
    }
}
$(document).on("keydown", startGame);

green_button.on("click", function(){
    if(continue_playing==true){
        green_button.addClass("pressed");
        setTimeout(() => {green_button.removeClass("pressed");
        }, 70);
        var green_audio = new Audio('sounds/green.mp3');
        green_audio.play();
        pressed_buttons.push(0);
        continuePlaying(pressed_buttons.length-1);
    }
});
red_button.on("click", function(){
    if(continue_playing==true){
        red_button.addClass("pressed");
        setTimeout(() => {red_button.removeClass("pressed");
        }, 70);
        var red_audio = new Audio('sounds/red.mp3');
        red_audio.play();
        pressed_buttons.push(1);
        continuePlaying(pressed_buttons.length-1);
    }
});
yellow_button.on("click", function(){
    if(continue_playing==true){
        yellow_button.addClass("pressed");
        setTimeout(() => {yellow_button.removeClass("pressed");
        }, 70);
        var yellow_audio = new Audio('sounds/yellow.mp3');
        yellow_audio.play();
        pressed_buttons.push(2);
        continuePlaying(pressed_buttons.length-1);
    }
});
blue_button.on("click", function(){
    if(continue_playing==true){
        blue_button.addClass("pressed");
        setTimeout(() => {blue_button.removeClass("pressed");
        }, 70);
        var blue_audio = new Audio('sounds/blue.mp3');
        blue_audio.play();
        pressed_buttons.push(3);
        continuePlaying(pressed_buttons.length-1);
    }
});

function randomButton(){
    if(continue_playing == true){
        var random = Math.floor(Math.random() * 4);
        buttons_memory.push(random);
        if(random == 0){
            var green_audio = new Audio('sounds/green.mp3');
            green_audio.play();
            green_button.css("opacity", "0.5");
            setTimeout(() => {green_button.css("opacity", "1");
            }, 100);
        }else if(random == 1){
            var red_audio = new Audio('sounds/red.mp3');
            red_audio.play();
            red_button.css("opacity", "0.5");
            setTimeout(() => {red_button.css("opacity", "1");
            }, 100);
        }else if(random == 2){
            var yellow_audio = new Audio('sounds/yellow.mp3');
            yellow_audio.play();
            yellow_button.css("opacity", "0.5");
            setTimeout(() => {yellow_button.css("opacity", "1");
            }, 100);
        }else{
            var blue_audio = new Audio('sounds/blue.mp3');
            blue_audio.play();
            blue_button.css("opacity", "0.5");
            setTimeout(() => {blue_button.css("opacity", "1");
            }, 100);
        }
    }
    youWin();
    pressed_buttons = [];
}

function youWin(){
        win = true;
        continue_playing = true;
        level++;
        $("#title").html(`Level ${level}`);
        pressed_buttons = [];
}

function youLose(){
    win = false;
    buttons_memory = [];
    pressed_buttons = [];
    continue_playing = false;
    level = 0;
    $("body").css("background-color", "red");
    $("body").css("opacity", "0.8");    
    setTimeout(() => {$("body").css("background-color", "#021c39");
    }, 100);
    setTimeout(() => {$("body").css("opacity", "1"); 
    }, 100);
    var wrong_audio = new Audio('sounds/wrong.mp3');
    wrong_audio.play();
    $("#title").html("Game Over, Press Any Key to Restart");
}

function continuePlaying(index){
    if(buttons_memory[index] == pressed_buttons[index]){
        if(buttons_memory.length == pressed_buttons.length){
            randomButton();
        }  
    }else{
        youLose();       
    }
    console.log(level);

}
        
    
