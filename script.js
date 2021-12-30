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

//Get access to the scores on page
const usrScore = document.querySelector("#usr-score");
const compScore = document.querySelector("#comp-score");
const ties = document.querySelector("#ties");

//get access to the results 
const results = document.querySelector("#result-p");

//Get buttons and add action listeners for clicks
const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("click", playGame));


//This Function plays through a game
function playGame(e) {
    

    //get which button the user selected
    console.log(e.target.id);
    userChoice = e.target.id;

    //Randomly select rock, paper, or scissors for computer
    compChoice = getCompChoice(choices);

    //compare user's input to computer's selection
    result = getResult(userChoice, compChoice);

    //display winner
    results.textContent = result;
    //display winner count
    console.log(`Now you've won ${userWinCount}, I've won ${compWinCount}, and we've tied ${tieCount}.`);

    usrScore.textContent = `Your Score: ${userWinCount}`;
    compScore.textContent = `My Score: ${compWinCount}`;
    ties.textContent = `Ties: ${tieCount}`;

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


