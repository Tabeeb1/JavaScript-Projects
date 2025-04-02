let choices = ["rock", "paper", "scissor"];
let finished = false;
let userScore = 0;
let computerScore = 0;

function userPictureAdd(player, userPicture, elem1, elem2, elem3){
    if(player === "rock")
        userPicture.appendChild(elem1);
    else if(player === "paper")
        userPicture.appendChild(elem2);
    else 
        userPicture.appendChild(elem3);
}

function computerPictureAdd(computer, computerPicture, elem1, elem2, elem3){
    if(computer === "rock")
        computerPicture.appendChild(elem1);
    else if(computer === "paper")
        computerPicture.appendChild(elem2);
    else 
        computerPicture.appendChild(elem3);
}



function picture(player, computer) {
    let userPicture = document.querySelector(".picture-box1");
    let computerPicture = document.querySelector(".picture-box2");
    let userElem1 = document.createElement("img");
    userElem1.src = 'images/rock.png';
    let userElem2 = document.createElement("img");
    userElem2.src = 'images/paper.png';
    let userElem3 = document.createElement("img");
    userElem3.src = 'images/scissor.png';
    let computerElem1 = document.createElement("img");
    computerElem1.src = 'images/rock.png';
    let computerElem2 = document.createElement("img");
    computerElem2.src = 'images/paper.png';
    let computerElem3 = document.createElement("img");
    computerElem3.src = 'images/scissor.png';

    userPicture.innerHTML = "";
    computerPicture.innerHTML = "";
    userPictureAdd(player, userPicture, userElem1, userElem2, userElem3);
    computerPictureAdd(computer, computerPicture, computerElem1, computerElem2, computerElem3);
}

const isDraw = (player, computer) => {
    return player === computer;
}

const userWon = (player, computer) => {
    if(
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")
    )
    {
        return true;
    }
    return false;
}

const computerWon = (player, computer) => {
    if(
        (computer === "rock" && player === "scissor") ||
        (computer === "paper" && player === "rock") ||
        (computer=== "scissor" && player === "paper")
    )
    {
        return true;
    }
    return false;
}

function play() {
    let player = prompt("Rock, Paper, Scissor").toLowerCase();
    if(player !== "rock" && player !== "paper" && player !== "scissor"){
        alert("Please choose betweem rock, paper or scissor!");
        return;
    }
    let computer =  choices[Math.floor(Math.random() * choices.length)];
    
    picture(player, computer);
    
    if(isDraw(player, computer))
        heading2.innerHTML = "Draw!!! Click for next move";

    if(userWon(player, computer)){
        userScore += 1;
        heading2.innerHTML = `User won, Scoreline: User ${userScore} - ${computerScore} Computer`;
    }

    if(computerWon(player, computer)){
        computerScore += 1;
        heading2.innerHTML = `Computer won, Scoreline: User ${userScore} - ${computerScore} Computer`;
    }

    if(computerScore === 5 || userScore === 5){
        if(computerScore === 5)
            heading2.innerHTML = `Computer Won!!!`;
        else 
            heading2.innerHTML = `User Won!!!`;

        finished = true;
        let ending = document.querySelector(".game-heading2");
        ending.classList.add("game-heading3");
        ending.classList.remove("game-heading2");
        return;
    }
}

const checkGame = () => {
    if(finished)
        return;

    play();    
}

let heading2 = document.querySelector(".game-heading2");
heading2.addEventListener("click", checkGame);