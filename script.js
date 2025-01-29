let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enableBtns = () => {
    for (let box of boxes){
        box.disabled = false;
    } 
}

const resetGame = () => {
    turn0 = true;
    enableBtns();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0 == true){
            box.innerText = "O";
            box.classList.add("O-color");
            box.classList.remove("X-color");
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
            box.classList.add("X-color");
            box.classList.remove("O-color");
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtns = () => {
    for (let box of boxes){
        box.disabled = true;
    } 
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner = () => {
    for (pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);