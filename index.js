const randomNumber1 = Math.floor(6*Math.random() + 1);

document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";

const randomNumber2 = Math.floor(6*Math.random() + 1);

document.querySelector(".img2").src = "images/dice"+randomNumber2+".png";

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "It's a draw";
}else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 won";
}else{
  document.querySelector("h1").innerHTML = "Player 2 won";
}
