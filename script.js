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
let winner;

//Explain the game
console.log("Welcome to Rock, Paper, Scissors");
console.log("Please enter 'Rock', 'Paper', or 'Scissors' to choose what you would like to use.");
console.log("I'll choose one as well, and let you know who won!");
do{
    //play through one game
    playGame();
    //ask if user wants to play again
    playMore = prompt("Would you like to keep playing? 'yes' or 'no'", "yes");

    try{playMore = sanitize(playMore)}
    catch(error){playMore = "no"};
    if(playMore != ("yes"||"no")){
        playMore = "no";
    }

//loop to top
}while(playMore != "no");

//Thank the player and let them know who won overall.
winner = overallWinner(compWinCount, userWinCount, tieCount);
console.log(`Thanks for playing! ${winner}`);


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

//This function takes in the function, sets the case to lower, and sees if the user entered a valid option.
function sanitize(choice) {
    if (!((choice == "rock" && choice == "paper" && choice == "scissors") && (choice == "yes" && choice == "no")) && choice == null) {
        choice = "none";
    }
    return choice.toLowerCase();
}

//This function checks to see if the user chose "rock", "paper", or "scissors"
function check(choice) {

    while (!(choice == "rock" || choice == "paper" || choice == "scissors")) {
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
    //if the user picked rock and the computer picked rock, tie game
    //if the user picked rock and the computer picked paper, computer won
    //if the user picked rock and the computer picked scissors, user won
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
    //if the user picked paper and the computer picked rock, user won
    //if the user picked paper and the computer picked paper, tie game
    //if the user picked paper and the computer picked scissons, computer won
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

    //if the user picked scissors and the computer picked rock, computer won
    //if the user picked scissors and the computer picked paper, user won
    //if the user picked scissors and the computer picked scissons, tie game
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

//This function takes in the scores and returns who won overall
function overallWinner(comp, user){
    if(comp>user){
        return "I won overall! Go Me!";
    }else if(user > comp){
        return "You won overall! Way to go!";
    }else if(user == comp){
        return "We tied overall! I wish I won!";
    }
    return "I got no idea who won! :(";

}


