let homeCount = 0;
let awayCount = 0

let homeScore = document.getElementById("home-score-show");
let awayScore = document.getElementById("away-score-show");

function oneIncrease() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function twoIncrease() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function threeIncrease() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function awayOneIncrease() {
    awayCount += 1;
    awayScore.textContent = awayCount;
}

function awayTwoIncrease() {
    awayCount += 2;
    awayScore.textContent = awayCount;
}

function awayThreeIncrease() {
    awayCount += 3;
    awayScore.textContent = awayCount;
}

function homeReset(){
    homeCount = 0;
    homeScore.textContent = "0";
}

function awayReset() {
    awayCount = 0;
    awayScore.textContent = "0";
}




