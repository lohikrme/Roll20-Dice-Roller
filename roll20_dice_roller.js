// ----------Roll20 Dice Roller----------

//Last time updated: 23th november 2025.
//For personal use only. All rights reserved.

// init variables
let receiving_rolls = true;

const states = {
    FIGHT: 'fight',
    PRIORITY: 'priority',
    SHOOT: 'shoot',
    WOUND: 'wound',
    OUTCOME: 'outcome',
    NONE: '',
};

let state = states.NONE;

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

const stateText = document.createElement('p');
stateText.style.height = 'auto';
stateText.style.width = '100px';
stateText.style.position = 'absolute';
stateText.style.top = '160px';
stateText.style.right = '50px';
stateText.style.fontSize = '2em';
stateText.style.lineHeight = '1.5';
stateText.style.color = '#228B22';
stateText.style.fontFamily = 'Papyrus, serif';
stateText.innerText = `State: None`;

let rightsidebar = document.querySelector('#rightsidebar .tabmenu');
rightsidebar.appendChild(diceImage);
rightsidebar.appendChild(stateText);

// update state and state text
function updateStateText() {
    if (state === states.NONE) {
        stateText.innerText = `State: none`;
    } else {
        stateText.innerText = `State: ${state}`;
    }
}

//----------Listen to own keyboard events and activate scripts----------
function KeyUpHandler(event) {
    console.log(event);

    // ------------------
    // DICE ROLLS

    // User presses key 1
    if (event.keyCode === 49 && receiving_rolls) {
        textarea.value = `/roll 1d6 ${state}`;
        send_button.click();
    }

    // User presses key 2
    else if (event.keyCode === 50 && receiving_rolls) {
        textarea.value = `/roll 2d6 ${state}`;
        send_button.click();
    }

    // User presses key 3
    else if (event.keyCode === 51 && receiving_rolls) {
        textarea.value = `/roll 3d6 ${state}`;
        send_button.click();
    }

    // User presses key 4
    else if (event.keyCode === 52 && receiving_rolls) {
        textarea.value = `/roll 4d6 ${state}`;
        send_button.click();
    }

    // User presses key 5
    else if (event.keyCode === 53 && receiving_rolls) {
        textarea.value = `/roll 5d6 ${state}`;
        send_button.click();
    }

    // User presses key 6
    else if (event.keyCode === 54 && receiving_rolls) {
        textarea.value = `/roll 6d6 ${state}`;
        send_button.click();
    }

    // User presses key 7
    else if (event.keyCode === 55 && receiving_rolls) {
        textarea.value = `/roll 7d6 ${state}`;
        send_button.click();
    }

    // User presses key 8
    else if (event.keyCode === 56 && receiving_rolls) {
        textarea.value = `/roll 8d6 ${state}`;
        send_button.click();
    }

    // User presses key 9
    else if (event.keyCode === 57 && receiving_rolls) {
        textarea.value = `/roll 9d6 ${state}`;
        send_button.click();
    }

    // ----------------------------------------------
    // STATES

    // User presses key "f" to enter "FIGHT" state
    // ascii 70 = F, ascii 102 = f
    else if (event.keyCode === 70 || event.keyCode === 102) {
        state = states.FIGHT;
        updateStateText();
    }

    // User presses key "s" to enter "SHOOT" state
    // ascii 83 = S, ascii 115 = s
    else if (event.keyCode === 83 || event.keyCode === 115) {
        state = states.SHOOT;
        updateStateText();
    }

    // User presses key "w" to enter "WOUND" state
    // ascii 87 = W, ascii 119 = w
    else if (event.keyCode === 87 || event.keyCode === 119) {
        state = states.WOUND;
        updateStateText();
    }

    // User presses key "o" to enter "OUTCOME" state
    // ascii 79 = O, ascii 111 = o
    else if (event.keyCode === 79 || event.keyCode === 111) {
        state = states.OUTCOME;
        updateStateText();
    }

    // User presses key "p" to enter "PRIORITY" state
    // ascii 80 = P, ascii 112 = p
    else if (event.keyCode === 80 || event.keyCode === 112) {
        state = states.PRIORITY;
        updateStateText();
    }

    // User presses key "n" to enter "NONE/NULL" default state
    // ascii 78 = N, ascii 110 = n
    else if (event.keyCode === 78 || event.keyCode === 110) {
        state = states.NONE;
        updateStateText();
    }

    // User wants to keep break a from rolls so he can write text with numbers
    else if (event.keyCode === 27) {
        receiving_rolls = receiving_rolls ? false : true;
        // not receiving rolls, set status to NONE and image to suitable pause-image
        if (!receiving_rolls) {
            state = states.NONE;
            updateStateText();

            diceImage.src =
                'https://raw.githubusercontent.com/lohikrme/Roll20-Dice-Roller/refs/heads/main/images/dice2-pause.png';
        }
        // receiving images, set image to suitable active-image
        else {
            diceImage.src =
                'https://raw.githubusercontent.com/lohikrme/Roll20-Dice-Roller/refs/heads/main/images/dice.png';
        }
    }
}
