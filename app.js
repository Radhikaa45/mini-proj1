let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-winner");
let msg = document.querySelector("#msg");

let turn0 = true;

let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

// Adding click event to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("WINNER", pos1);
        showwinner(pos1);
      }
    }
  }
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msg.innerText="";
  msgcontainer.classList.add("hide");
  turn0 = true;
};

// ✅ Attach to both buttons
resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);