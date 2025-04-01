let win = 
[    
    [0,1,2],    [3,4,5],    [6,7,8],    [0,3,6],    
                
    [1,4,7],   [2,5,8],    [0,4,8],    [2,4,6]

];

let boxes = document.querySelectorAll(".box");
let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let checkWin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPlayer = prompt("Who will go first? X or O").toUpperCase();
let heading = document.querySelector(".game-heading");
let gameOver = false;


const previouslyOccupied = (index) => {
    if(board[index] !== -1) 
        return true;
    else {
        board[index] = currentPlayer === 'X' ? 1 : 0 ;
        checkWin[index] = currentPlayer === 'X' ? 1 : 0 ;
        boxes[index].innerHTML = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        return false;
    }
}


const isFinished = () => {
    for(let x of board){
        if(x === -1)
            return false;
    }
    return true;
};

const isWon = () => {
    for(const currIndex of win) {
        let [firstValue, secondValue, thirdValue] = [currIndex[0], currIndex[1], currIndex[2]];
        console.log(firstValue, secondValue, thirdValue, win[currIndex[0]], win[currIndex[1]], win[currIndex[2]]);
        if(checkWin[firstValue] === checkWin[secondValue] && checkWin[secondValue] === checkWin[thirdValue])
            return true;
     }
     return false;
}

function checkingCondition(index) {
    if(isFinished()) {
        heading.innerHTML = "Match Drawn !!!"
        gameOver = true;
    }

    if(previouslyOccupied(index)) 
        alert("Already occupied");

    if(isFinished()) {
        heading.innerHTML = "Match Drawn !!!"
        gameOver = true;
    }

    if(isWon()){
        if(currentPlayer === 'X')
            heading.innerHTML = `O Wins !!!`;
        else
            heading.innerHTML = `X Wins !!!`;
        gameOver = true;
    }
}

function checkGameOver(index){
    if(gameOver)
        return;
    checkingCondition(index);
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => checkGameOver(index));
});