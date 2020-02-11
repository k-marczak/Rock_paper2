var choices = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;

function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}

setInterval(score, 50);

function convert(word){
    if(word === "paper") return '<i class="far fa-hand-paper"></i>';
    if(word === "rock") return '<i class="far fa-hand-rock"></i>';
    
    return '<i class="far fa-hand-scissors"></i>';
}
function game(UserChoice){
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);

    if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper" ){
        win();
    }
    else if(UserChoice === ComChoice){
        draw();
    }
    else{
        lose();
    }

    function continueGame(){
        i = Math.floor(Math.random() * 3);
        ComChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continueGame, 1200);

}

function win(){
    UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
}

function draw(){
    document.getElementById("who").innerHTML = "Its a draw!";
}

function lose() {
    ComPoints++;
    document.getElementById("who").innerHTML = "You lose!";
}