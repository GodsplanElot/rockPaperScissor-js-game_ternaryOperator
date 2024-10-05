//tenary operators

//sytanx
//condition ? ifTrue : ifFalse


let playerOne = "rock"
let computer = "rock";

let result = playerOne === computer ? "Tie game!" :
playerOne ===  "rock" && computer === "paper"? "computer wins!"
: playerOne === "paper" && computer === "scissors" ?
"computer wins!"
:playerOne === "scissors" && computer  ? "computer wins"
: "playerOne wins!";
console.log(result)