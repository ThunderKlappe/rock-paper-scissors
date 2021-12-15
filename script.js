//***Rock Paper Scissors program***

//Initialize variables
let compChoice;
let userChoice;
let compWinCount = 0;
let userWinCount = 0;
let tieCount = 0;
let choices = ["rock", "paper", "scissors"];
let result;
let playMore;

//Explain the game
console.log("Welcome to Rock, Paper, Scissors");
console.log("Please enter 'Rock', 'Paper', or 'Scissors' to choose what you would like to use.");
console.log("I'll choose one as well, and let you know who won!");
do{
    //play through one game
    playGame();
    //ask if user wants to play again
    playMore = prompt("Would you like to keep playing? 'yes' or 'no'", "no");
//loop to top
}while(playMore != "no");


//This Function plays through a game
function playGame() {
    //Prompt for either rock, paper, or scissors from user
    userChoice = getUserChoice();
    //Sanitize user selection
    userChoice = sanitize(userChoice);
    //Check to see if they answered 'Rock', 'Paper', or 'Scissors'
    userChoice = check(userChoice);


    //Randomly select rock, paper, or scissors for computer
    compChoice = getCompChoice(choices);
    //compare user's input to computer's selection
    result = getResult(userChoice, compChoice);

    //display winner
    console.log(result);
    //display winner count
    console.log(`Now you've won ${userWinCount}, I've won ${compWinCount}, and we've tied ${tieCount}.`);
}

//This function asks the user for their choice and returns their choice
function getUserChoice() {
    return prompt("Would you like rock, paper, or scissors?");
}

//This function takes in the function, sets the case to lower, and checks to see if the user chose "rock", "paper", or "scissors"
function sanitize(choice) {
    choice = choice.toLowerCase();
    if (choice == !("rock" || "paper" || "scissors")) {
        choice = "none";
    }
    return choice;

}

function check(choice) {
    while (choice == "none") {
        //if not, ask again
        console.log("I'm sorry, please enter 'Rock', 'Paper', or 'Scissors' to choose what you would like to use.");
        choice = getUserChoice();
        choice = sanitize(choice);
    }
    return choice;
}

//This function randomly selects from an array and returns the contents of the index selected.
function getCompChoice(choiceArray) {
    let indexSel = Math.floor((Math.random() * 3));
    return choiceArray[indexSel];
}

//This function takes in the user choice and the computer choice and returns what the result is
function getResult(user, comp) {
    if (user == "rock") {
        if (comp == "rock") {
            tieCount++;
            return "You picked rock and I picked rock. We tied!";
        }
        else if (comp == "paper") {
            compWinCount++;
            return "You picked rock and I picked paper. I win!";
        }
        else if (comp == "scissors") {
            userWinCount++;
            return "You picked rock and I picked scissors. You win!";
        }
    }
    else if (user == "paper") {
        if (comp == "rock") {
            userWinCount++;
            return "You picked Paper and I picked Rock. You win!";
        }
        else if (comp == "paper") {
            tieCount++;
            return "You picked Paper and I picked Paper. We tied!";
        }
        else if (comp == "scissors") {
            compWinCount++;
            return "You picked Paper and I picked Scissors. I won!";
        }
    }
    else if (user == "scissors") {
        if (comp == "rock") {
            compWinCount++;
            return "You picked Scissors and I picked Rock. I won!";
        }
        else if (comp == "paper") {
            userWinCount++;
            return "You picked Scissors and I picked Paper. You won!";
        }
        else if (comp == "scissors") {
            tieCount++;
            return "You picked Scissors and I picked Scissors. We tied!";
        }
    }
}

//if the user picked rock and the computer picked rock, tie game
//if the user picked rock and the computer picked paper, computer won
//if the user picked rock and the computer picked scissors, user won

//if the user picked paper and the computer picked rock, user won
//if the user picked paper and the computer picked paper, tie game
//if the user picked paper and the computer picked scissons, computer won

//if the user picked scissors and the computer picked rock, computer won
//if the user picked scissors and the computer picked paper, user won
//if the user picked scissors and the computer picked scissons, tie game