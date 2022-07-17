// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

function runGame() {
    }


    function checkAnswers() {

    }

    function calculateCorrectAnswers() {

    }

    function incrementWrongAnswers() {

    }

    function displayAdditionQuestion() {

    }

    function displaySubtractQuestion() {

    }

    function displayMultiplyQuestion() {

    }