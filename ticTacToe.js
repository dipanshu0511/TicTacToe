// Accessing Button

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Creating Player turn

let turnO = true;//playerO 
let count = 0; //to track draw

const winArr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("Box is clicked.");
        if (turnO) {
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;
        count++
        checkWinner();
    });
});

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation! the winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const gameDraw = (draw) => {
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(arr of winArr) {
        let posVal1 = boxes[arr[0]].innerText;
        let posVal2 = boxes[arr[1]].innerText;
        let posVal3 = boxes[arr[2]].innerText;

        if (posVal1 != "" && posVal1 === posVal2 && posVal2 === posVal3){
            console.log(` The winner is Player ${posVal1}.`);
            //alert("We have our winner Player" + posVal1);
            showWinner(posVal1);
            return true;
        }
    }
    if (count === 9) {
        msg.innerText = `GAME OVER!! It's a Draw. Play Again.`;
        let draw = msg.innerText;
        gameDraw(draw);
        count = 0;
        return true;
    }
};

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);