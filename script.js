//***snowball snowboarder skier program***

//Initialize variables
let compChoice;
let userChoice;
let compWinCount = 0;
let userWinCount = 0;
let tieCount = 0;
let choices = ["snowball", "snowboarder", "skier"];
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

    //Randomly select snowball, snowboarder, or skier for computer
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
    //if the user picked snowball and the computer picked snowball, tie game
    //if the user picked snowball and the computer picked snowboarder, computer won
    //if the user picked snowball and the computer picked skier, user won
    if (user == "snowball") {
        if (comp == "snowball") {
            tieCount++;
            return "You picked snowball and I picked snowball. We tied!";
        }
        else if (comp == "snowboarder") {
            compWinCount++;
            return "You picked snowball and I picked snowboarder. I win!";
        }
        else if (comp == "skier") {
            userWinCount++;
            return "You picked snowball and I picked skier. You win!";
        }
    }
    //if the user picked snowboarder and the computer picked snowball, user won
    //if the user picked snowboarder and the computer picked snowboarder, tie game
    //if the user picked snowboarder and the computer picked scissons, computer won
    else if (user == "snowboarder") {
        if (comp == "snowball") {
            userWinCount++;
            return "You picked snowboarder and I picked snowball. You win!";
        }
        else if (comp == "snowboarder") {
            tieCount++;
            return "You picked snowboarder and I picked snowboarder. We tied!";
        }
        else if (comp == "skier") {
            compWinCount++;
            return "You picked snowboarder and I picked skier. I won!";
        }
    }

    //if the user picked skier and the computer picked snowball, computer won
    //if the user picked skier and the computer picked snowboarder, user won
    //if the user picked skier and the computer picked scissons, tie game
    else if (user == "skier") {
        if (comp == "snowball") {
            compWinCount++;
            return "You picked skier and I picked snowball. I won!";
        }
        else if (comp == "snowboarder") {
            userWinCount++;
            return "You picked skier and I picked snowboarder. You won!";
        }
        else if (comp == "skier") {
            tieCount++;
            return "You picked skier and I picked skier. We tied!";
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


