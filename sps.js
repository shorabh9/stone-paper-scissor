const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
var comp = document.querySelector("#comp");
var you = document.querySelector("#you");
var choice = document.querySelector("#choice");
var computerCount = document.querySelector("#computerCount");
var userCount = document.querySelector("#userCount");
var x = 0;
var y = 0;

function getComputerChoice() {
    const choices = ["stone" , "paper" , "scissor"];
    let randomNum = Math.random();
    let index = Math.floor(randomNum*3);
    return choices[index];
}

function computerScoreCount() {
    x++;
    computerCount.textContent = x;
}
function userScoreCount() {
    y++;
    userCount.textContent = y;
}
 
function determineWinner(computerChoice,userChoice) {
    if(userChoice===computerChoice) {
        choice.style.backgroundColor = "#0f172a";
        return "Draw the chance";
    }
    else if((userChoice==="stone" && computerChoice==="scissor") ||
            (userChoice==="paper" && computerChoice==="stone") ||
            (userChoice=="scissor" && computerChoice==="paper")
    ) {

        choice.style.backgroundColor = "green";
        userScoreCount();
        return "Win the chance";
    }
    else {
        choice.style.backgroundColor = "red";
        computerScoreCount() ;
        return "Lose the chance";
    }
}

function playGame(userChoice) {
    let computerChoice = getComputerChoice();
    let output = determineWinner(computerChoice,userChoice);

    comp.textContent = "Computer Chose: " + computerChoice;
    you.textContent = "You chose: " + userChoice;
    choice.textContent = output;
}

stone.addEventListener('click' , function(){
    playGame("stone");
});

paper.addEventListener('click' , function(){
    playGame("paper");
});

scissor.addEventListener('click' , function(){
    playGame("scissor");
});