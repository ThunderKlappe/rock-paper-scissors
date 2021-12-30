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
    userChoice = e.target.id;

    //Randomly select snowball, snowboarder, or skier for computer
    compChoice = getCompChoice(choices);

    //compare user's input to computer's selection
    result = getResult(userChoice, compChoice);

    //display winner
    results.textContent = result;
    //display winner count

    usrScore.textContent = `Your Score: ${userWinCount}`;
    compScore.textContent = `My Score: ${compWinCount}`;
    ties.textContent = `Ties: ${tieCount}`;

    checkWinner();
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
//This function checks to see if there is a winner
function checkWinner() {
    if (userWinCount == 5 || compWinCount == 5) {
        //display the winner
        let winner = overallWinner(compWinCount, userWinCount);
        //disable the buttons
        btns.forEach(btn => btn.removeEventListener("click", playGame));

        const winnerBox = document.createElement("div");
        winnerBox.setAttribute("id", "winner-box")
        const winnerDisp = document.createElement("p");
        const playAgainPrompt = document.createElement("p");
        const buttonContainer = document.createElement("div");
        const playAgainButton = document.createElement("button");
        const dontPlayButton = document.createElement('button');
        winnerDisp.textContent = winner;
        playAgainPrompt.textContent = "Do you want to play again?";
        playAgainButton.textContent = "Heck Yeah!";
        dontPlayButton.textContent = "No, I'm lame...";
        buttonContainer.appendChild(playAgainButton);
        buttonContainer.appendChild(dontPlayButton);
        winnerBox.appendChild(winnerDisp);
        winnerBox.appendChild(playAgainPrompt);
        winnerBox.appendChild(buttonContainer);
        document.body.appendChild(winnerBox);

        playAgainButton.addEventListener('click', ()=> location.reload());
        dontPlayButton.addEventListener('click', ()=> window.close());
    }
}

//This function takes in the scores and returns who won overall
function overallWinner(comp, user){
    if(comp>user){
        return "I won! Eat powder, sucka!!";
    }else if(user > comp){
        return "You won... The snow is mushy anyways...";
    }
    return "I got no idea who won! :(";

}


