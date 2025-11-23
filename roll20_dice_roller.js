// ----------Roll20 Dice Roller----------

//Last time updated: 23th november 2025.
//For personal use only. All rights reserved.

// init variables
let receiving_rolls = true;

// Select the roll20.net chatbox with id and class where diceroller writes
let textarea = document.querySelector('#textchat-input .ui-autocomplete-input');
let send_button = document.querySelector('#textchat-input .btn');
window.addEventListener('keyup', KeyUpHandler, false);

// add roller logo (image of dice) to right side bar if roller starts
const diceImage = document.createElement('img');
diceImage.src =
    'https://raw.githubusercontent.com/lohikrme/Roll20-Dice-Roller/refs/heads/main/images/dice.png';
diceImage.alt = 'image as a sign that dice roller works';
diceImage.style.width = '100px';
diceImage.style.height = '100px';
diceImage.style.position = 'absolute';
diceImage.style.top = '50px';
diceImage.style.right = '50px';

let rightsidebar = document.querySelector('#rightsidebar .tabmenu');
rightsidebar.appendChild(diceImage);

//----------Listen to own keyboard events and activate scripts----------
function KeyUpHandler(event) {
    console.log(event);

    // User presses key 1
    if (event.keyCode === 49 && receiving_rolls) {
        textarea.value = '/roll 1d6';
        send_button.click();
    }

    // User presses key 2
    else if (event.keyCode === 50 && receiving_rolls) {
        textarea.value = '/roll 2d6';
        send_button.click();
    }

    // User presses key 3
    else if (event.keyCode === 51 && receiving_rolls) {
        textarea.value = '/roll 3d6';
        send_button.click();
    }

    // User presses key 4
    else if (event.keyCode === 52 && receiving_rolls) {
        textarea.value = '/roll 4d6';
        send_button.click();
    }

    // User presses key 5
    else if (event.keyCode === 53 && receiving_rolls) {
        textarea.value = '/roll 5d6';
        send_button.click();
    }

    // User presses key 6
    else if (event.keyCode === 54 && receiving_rolls) {
        textarea.value = '/roll 6d6';
        send_button.click();
    }

    // User presses key 7
    else if (event.keyCode === 55 && receiving_rolls) {
        textarea.value = '/roll 7d6';
        send_button.click();
    }

    // User presses key 8
    else if (event.keyCode === 56 && receiving_rolls) {
        textarea.value = '/roll 8d6';
        send_button.click();
    }

    // User presses key 9
    else if (event.keyCode === 57 && receiving_rolls) {
        textarea.value = '/roll 9d6';
        send_button.click();
    }

    // User wants to keep break a from rolls so he can write text with numbers
    else if (event.keyCode === 27) {
        receiving_rolls = receiving_rolls ? false : true;
        if (!receiving_rolls) {
            diceImage.src =
                'https://raw.githubusercontent.com/lohikrme/Roll20-Dice-Roller/refs/heads/main/images/dice2-pause.png';
        } else {
            diceImage.src =
                'https://raw.githubusercontent.com/lohikrme/Roll20-Dice-Roller/refs/heads/main/images/dice.png';
        }
    }
}
