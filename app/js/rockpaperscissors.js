////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
if (rock)
    gen var x = .33
if (paper)
    gen var x = .66
if (scissors)
    gen var x = 1
    if getPlayerMove = null;
    return prompt(Please try again);
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

  var move;
  move = move || randomPlay();
   return randomPlay();


function getWinner(playerMove,computerMove) {
    var win = 0;
    var lose = 0;
    var tie = 0;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
if ((x=.33) && (randomNumber < .33)) || ((x=.66) && (.33 < randomNumber < .66)) || ((x=1) && (.66 < randomNumber))
      console.log(TIE);
    tie ++1;
if ((x=.33) && (randomNumber > .66) || ((x=.66) && (randomNumber < .33)) || ((x=1) && (randomNumber < .66))
    console.log(WIN);
    win ++1;
if ((x=.33) && (.33 < randomNumber < .66) || ((x=.66) && (.33 < randomNumber < .66)) || ((x=1) && (.66 < randomNumber))
      console.log(LOSE);
      lose ++1;
function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  if var win = 5 {
    console.log(You have won the best of five)
  }
  else if var lose = 5 {
    console.log(You have lost the best of five)
  }
  else if var tie = 5{
    console.log(You have lost the best of five)
  }
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  return [playerWins, computerWins];
}

