game = document.querySelector(".game");
boxes = document.querySelectorAll(".box");
reset = document.querySelector(".start");
message = document.querySelector(".message-container");
win=document.querySelector("#winner");
let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  message.classList.add('hide');
}
//player turns:
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    }
    else {
      box.innerText = "X"
      turn0 = true;
    }
    box.disabled = true;
    checkWinner()
  });
});

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner) => {
  win.innerText=`Congratulations! winner is ${winner}`;
  message.classList.remove("hide");
  disableBoxes();
}
//check winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
}
reset.addEventListener("click", resetGame); 