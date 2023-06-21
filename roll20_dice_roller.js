
/* ----------Roll20 Dice Roller----------*/

/*Last time updated: 5th january 2023. 
For personal use only. All rights reserved. */


/* ----------Select the roll20.net chatbox with id and class----------*/
var textarea = document.querySelector("#textchat-input .ui-autocomplete-input")
var send_button = document.querySelector("#textchat-input .btn")
window.addEventListener("keyup", KeyUpHandler, false)



/*----------Listen to own keyboard events and activate scripts----------*/
function KeyUpHandler(event) {

    console.log(event)

    /* User presses key 1 */
    if (event.keyCode === 49) {
        Roll1D6()
    }

    /* User presses key 2 */
    else if (event.keyCode === 50) {
        Roll2D6()
    }

    /* User presses key 3 */
    else if (event.keyCode === 51) {
        Roll3D6()
    }

    /* User presses key 4 */
    else if (event.keyCode === 52) {
        Roll4D6()
    }

    /* User presses key 5 */
    else if (event.keyCode === 53) {
        Roll5D6()
    }

    /* User presses key 6 */
    else if (event.keyCode === 54) {
        Roll6D6()
    }

    /* User presses key 7 */
    else if (event.keyCode === 55) {
        Roll7D6()
    }

    /* User presses key 8 */
    else if (event.keyCode === 56) {
        Roll8D6()
    }

    /* User presses key 9 */
    else if (event.keyCode === 57) {
        Roll9D6()
    }

}



/* ----------Create the script functions for different keys----------*/
/*----------This will simply write the command into chatbox and then press "Send"----------*/

/* roll 1d6 */
function Roll1D6() {
    textarea.value = "/roll 1d6"
    send_button.click()
}

/* roll 2d6 */
function Roll2D6() {
    textarea.value = "/roll 2d6"
    send_button.click()
}

/* roll 3d6 */
function Roll3D6() {
    textarea.value = "/roll 3d6"
    send_button.click()
}

/* roll 4d6 */
function Roll4D6() {
    textarea.value = "/roll 4d6"
    send_button.click()
}

/* roll 5d6 */
function Roll5D6() {
    textarea.value = "/roll 5d6"
    send_button.click()
}

/* roll 6d6 */
function Roll6D6() {
    textarea.value = "/roll 6d6"
    send_button.click()
}

/* roll 7d6 */
function Roll7D6() {
    textarea.value = "/roll 7d6"
    send_button.click()
}

/* roll 8d6 */
function Roll8D6() {
    textarea.value = "/roll 8d6"
    send_button.click()
}

/* roll 9d6 */
function Roll9D6() {
    textarea.value = "/roll 9d6"
    send_button.click()
}
