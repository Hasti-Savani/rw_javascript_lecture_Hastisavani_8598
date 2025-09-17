// Game : 1 Using Javascript Rock-Paper-Scissore

let score = 0
let computerScore = 0

const gameplay = (choice) => {

  let choices = ['rock' , 'paper' , 'scissore']
  
  let computerChoice = choices[Math.floor( Math.random() * 3)]
  
  console.log(computerChoice);

  let result = "Your chioce" + choice + "Computer choice" + computerChoice
  
  if(choice === computerChoice){
    console.log("It's a Draw!!!");
  }else if(choice === 'rock' && computerChoice === 'scissore' || choice === 'paper' && computerChoice === "rock" || choice === "scissore" && computerChoice === "paper"){
    result += "you win"
    score++;
  }else{
    result += "computer win"
    computerScore++;
  }

  document.getElementById("gameresult").innerHTML = result

  document.getElementById('score').innerHTML = 'score you' + score + "computer score" + computerScore
  
  
}