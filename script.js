const randomNumber = Math.floor(Math.random() * 100);
var noOfAttempt = 10;
document.getElementById('attempt').innerHTML = noOfAttempt;


function checkTheNumber() {
  const inputedNumber = parseInt(document.getElementById("number").value);
  noOfAttempt--;
  document.getElementById('attempt').innerHTML = noOfAttempt;
  document.getElementById("number").value = '';

  if(inputedNumber == randomNumber) {
    document.getElementById('message').innerHTML = "You Guessed Correctly";
  } else if(noOfAttempt == 0) {
    document.getElementById('message').innerHTML = "You Lost";
    document.getElementById('btn').disabled  = true;
  } else {
    document.getElementById('message').innerHTML = "Try Again!!";
  }
}