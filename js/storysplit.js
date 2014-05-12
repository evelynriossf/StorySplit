var Choice = ("yes");
var computerScore = 0;
var userScore = 0;
var pattRock = /^r/i;
var pattPaper = /^p/i;
var pattScissors = /^s/i;
var playAgain = ("yes");

var playRPS = function (Choice, computerScore, userScore) {
    var userChoice = 0;
    do {
        if (Choice.toLowerCase() == ("yes")) {
            userChoice = prompt("This is a game of Rock-Paper-Scissors. Do you choose rock, paper or scissors?");
            if (userChoice.match(/^n/i)) {
                alert("Thanks for playing... Goodbye!");
                return;
            }
        } else {
            userChoice = Choice;
        }
    } while (userChoice.match(pattRock) === null && userChoice.match(pattPaper) === null && userChoice.match(pattScissors) === null);
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    var compare = function (choice1, choice2) {
        if (choice1 == choice2) {
            return ("tie");
        } else if (choice1.match(pattRock)) {
            if (choice2 == ("scissors")) {
                userScore++;
                return ("You picked rock. The computer picked scissors. Rock beats scissors, so you win! The score is: YOU - " + (userScore) + ", COMPUTER - " + (computerScore) + " .");
            } else {
                computerScore++;
                return ("You picked rock. The computer picked paper. Paper beats rock, so the computer wins! The score is: YOU - " + (userScore) + ", COMPUTER - " + (computerScore) + " .");
            }
        } else if (choice1.match(pattPaper) !== null) {
            if (choice2 == ("rock")) {
                userScore++;
                return ("You picked paper. The computer picked rock. Paper beats rock, so you win! The score is: YOU - " + (userScore) + ", COMPUTER - " + (computerScore) + " .");
            } else {
                computerScore++;
                return ("You picked paper. The computer picked scissors. Scissors beats paper, so the computer wins! The score is: YOU - " + (userScore) + ", COMPUTER - " + (computerScore) + " .");
            }
        } else if (choice1.match(pattScissors) !== null) {
            if (choice2 == ("rock")) {
                computerScore++;
                return ("You picked scissors. The computer picked rock. Rock beats scissors, so the computer wins! The score is: YOU - " + (userScore) + ", COMPUTER - " + (computerScore) + " .");
            } else {
                userScore++;
                return ("You picked scissors. The computer picked paper. Scissors beats paper, so you win! The score is: YOU - " + (userScore) + ", COMPUTER - " + (computerScore) + " .");
            }
        }
    };
    var result = compare(userChoice.toLowerCase(), computerChoice);
    if (result === "tie") {
        playAgain = prompt("You and the computer both picked " + (userChoice.toLowerCase()) + ". The result is a tie. The score is still: YOU - " + (userScore) + ", COMPUTER - " + (computerScore) + " . Try again!");
    } else {
        playAgain = prompt(result + " Do you want to play again?");

    }
    var options = ["rock", "paper", "scissors"];
    if (options.indexOf(playAgain) !== -1) {
        playRPS(playAgain, computerScore, userScore);
    } else if (playAgain.match(pattRock)) {
        playAnswer = prompt("Did you mean to type 'rock'?");
        console.log(playAnswer);
        if (playAnswer.match(/^y/i) || playAnswer === "") {
            playRPS("rock", computerScore, userScore);
        } else playRPS("yes", computerScore, userScore);
    } else if (playAgain.match(pattPaper)) {
        playAnswer = prompt("Did you mean to type 'paper'?");
        if (playAnswer.match(/^y/i) || playAnswer === "") {
            playRPS("paper", computerScore, userScore);
        } else playRPS("yes", computerScore, userScore);
    } else if (playAgain.match(pattScissors)) {
        playAnswer = prompt("Did you mean to type 'scissors'?");
        if (playAnswer.match(/^y/i) || playAnswer === "") {
            playRPS("scissors", computerScore, userScore);
        } else playRPS("yes", computerScore, userScore);
    } else if (playAgain.match(/^n/i)) {
        alert("Thanks for playing. Goodbye!");
    } else playRPS("yes", computerScore, userScore);
};
playRPS("yes", 0, 0);