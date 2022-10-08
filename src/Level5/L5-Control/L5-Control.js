import React from 'react'
import Popup from 'react-popup';
import "../../Style/Control.css"
import Check from '../L5-Control/L5-Check';
import whileInformation from '../../Informations/whileInformation';
import boundry from '../../Checks/boundry';
import commandUse from '../../Checks/commandWhileUse';

const Level5Controls = () => {

    /**
     * Variables
     */

    //String that will show when button is clicked
    let value = ""

    //List of strings
    let list = []

    // Stores all the moves to be done on submit
    let moves = []

    // Checking if the submit button is pressed
    let pressed = false


    //To check if a command has been used
    let used = false


    //Checking if the dog has reached a location 
    let reached = false

    // Counting how many times a button has been selected
    let count = 0
    // Adding the count to an array
    let commands = []

    // To sum up the values of the commands array
    let total = 0


    /**
     * The delay to get the dog walking a tile at a time
     * 
     * @param {*} time - the duration 
     * @returns a promise
     */
    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }


    /**
     * Moves the dog object one tile to the left
     */
    function moveLeft() {
        let element = document.getElementById('dog');

        let food = document.getElementById('food');
        let foodbox = food.parentElement;
        const foodrow = parseInt(foodbox.getAttribute('data-row'))
        const foodcol = parseInt(foodbox.getAttribute('data-col'))

        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;

        if (col < 0) {
            boundry()
        }

        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === foodrow && col === foodcol) {
            reached = false
        }

        Check()
    }

    /**
     * Move the dog object one tile to the right
     */
    function moveRight() {
        let element = document.getElementById('dog');

        let food = document.getElementById('food');
        let foodbox = food.parentElement;
        const foodrow = parseInt(foodbox.getAttribute('data-row'))
        const foodcol = parseInt(foodbox.getAttribute('data-col'))

        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (col > 4) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === foodrow && col === foodcol) {
            reached = false
        }

        Check()
    }


    /**
     * Moves the dog object one tile up
     */
    function moveUp() {
        let element = document.getElementById('dog');

        let food = document.getElementById('food');
        let foodbox = food.parentElement;
        const foodrow = parseInt(foodbox.getAttribute('data-row'))
        const foodcol = parseInt(foodbox.getAttribute('data-col'))

        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (row < 0) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === foodrow && col === foodcol) {
            reached = false
        }

        Check()
    }

    /**
     * Moves the dog object one tile down
     */
    function moveDown() {
        let element = document.getElementById('dog');

        let food = document.getElementById('food');
        let foodbox = food.parentElement;
        const foodrow = parseInt(foodbox.getAttribute('data-row'))
        const foodcol = parseInt(foodbox.getAttribute('data-col'))

        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (row > 4) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === foodrow && col === foodcol) {
            reached = false
        }


        Check()
    }



    /**
     * Method checks if the dog object is at the 
     * end postion and if the user has completed
     * the level successfully
     */
    function statement() {

        let dog = document.getElementById('dog');
        let food = document.getElementById('food');

        if (dog != null || food != null) {
            const box = dog.parentElement;
            let foodbox = food.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))

            if (row === foodrow && col === foodcol) {
                document.getElementById('food').src = "assets/dog.png"
                let change = document.getElementById('food')
                change.style.visibility = 'visible';
                if (count <= 3) {
                    <div>
                        {Popup.clearQueue()}
                        {Popup.create({
                            title: 'Success',
                            content: 'You completed the level, Good Work! ',
                            buttons: {
                                right: [{
                                    text: 'Okay',
                                    className: 'success',
                                    action: function () {
                                        window.location.replace("/level6")
                                        Popup.clearQueue();
                                        Popup.close()
                                    }
                                }]
                            }
                        }, true)}
                    </div>
                }

            } else {
                <div>
                    {Popup.clearQueue()}
                    {Popup.create({
                        title: 'Failed',
                        content: 'You failed to complete the level, Try Again!',
                        buttons: {
                            right: [{
                                text: 'Try Again',
                                className: 'danger',
                                action: function () {
                                    window.location.reload(true)
                                    Popup.clearQueue();
                                    Popup.close()
                                }
                            }]
                        }
                    }, true)}

                </div>
            }
        }
    }



    /**
     * Adds a string to an array to that
     * represents the movement left. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addLeft() {
        let lefts = "left"

        moves.push(lefts)

        value = "moveLeft();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]
        if (pressed !== true) {
            if (list.length <= 3) {
                document.getElementById("action").innerHTML += "&nbsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 3) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/3"
                }
            }
        }
    }


    /**
     *Adds a string to an array to that
     * represents the movement right. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addRight() {
        let rights = "right"

        moves.push(rights)

        value = "moveRight();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 3) {
                document.getElementById("action").innerHTML += "&nbsp;" + item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 3) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/3"
                }
            }
        }
    }


    /**
     * Adds a string to an array to that
     * represents the movement down. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addDown() {
        let down = "down"

        moves.push(down)
        value = "moveDown();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 3) {
                document.getElementById("action").innerHTML += "&nbsp;" + item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 3) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/3"
                }
            }
        }
    }


    /**
     * Adds a string to an array to that
     * represents the movement up. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addUp() {
        let up = "up"

        moves.push(up)

        value = "moveUp();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 3) {
                document.getElementById("action").innerHTML += "&nbsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 3) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/3"
                }
            }
        }
    }


    /**
     * Submits the sequence that the user
     * has entered for the dog object to move.
     * The dog object will move after submit is pressed
     * and in a while loop. 
     */

    const whileAction = async () => {

        value = "}"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            document.getElementById("action").innerHTML += item + "<br/>"
        }

        let dog = document.getElementById('dog');
        let food = document.getElementById('food');

        if (dog != null || food != null) {
            const box = dog.parentElement;
            let foodbox = food.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))


            if (row !== foodrow && col !== foodcol) {
                reached = true;
            }

            while (reached) {

                let items = moves.values();
                pressed = true

                // Iterating through all the moves in the array to know which move to do
                for (let element of items) {
                    if (element === "left") {
                        moveLeft()
                        await delay(800)
                    }
                    if (element === "right") {
                        moveRight()
                        await delay(800);
                    }
                    if (element === "down") {
                        moveDown()
                        await delay(800);
                    }
                    if (element === "up") {
                        moveUp()
                        await delay(800);

                    }

                }

            }
            statement()
            if (pressed === true && used !== true) {
                commandUse()
            }
        }
    }

    /**
     * Adds a string to an array to that
     * represents the while statement command. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addWhile() {
        used = true

        value = "while (dog != food) {"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 3) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 3) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/3"
                }
            }
        }
    }


    /**
     * Added a clear button to remove the 
     * sequence from the panel. And reset the 
     * game.
     */
    function clearAll() {
        list = []
        moves = []
        commands = []
        count = 0
        document.getElementById("action").innerHTML = ""
        document.getElementById("count").innerHTML = "/3"
    }



    const left = "{"
    const right = "}"

    return (
        <div class="level5Contain">
             <h2 class ="h26">Level 5:</h2>

            <div class="speech" >
                This level is introducing while loops! Your aim for this level is to help the dog get to the food, you have to use the while command to limit
                the amount of times you repeat the commands. You have to use the same number or less number of commands mentioned in the top right corner.
                <br /> Good luck! <br /> (To learn more about while statement click the i below)
            </div>
            <div class="borderPanel">

                <div class="toppart5">
                    <div class="containing">
                        <p data-testid="counter" id="count" class="number">0/3</p>
                    </div>
                    <p class="titles">Enter Sequence:</p>
                    <p id="action" class="lists"></p>

                </div>

            </div>

            <div class="outside">
                <button type='submit' class="button" onClick={addLeft} disabled={pressed === true} >Left</button>
                <button type='submit' class="button" onClick={addUp} disabled={pressed === true} >Up</button>
                <button type='submit' class="button" onClick={addDown} disabled={pressed === true} >Down</button>
                <button type='submit' class="button" onClick={addRight} disabled={pressed === true} >Right</button>
                <div class="buttons-wrapper5">
                    <button class="seemingly-inner-button" onClick={whileInformation} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button type='submit' class="button" onClick={addWhile} disabled={pressed === true}>While</button>
                </div>
                <button type='submit' class="buttonClear" onClick={clearAll} disabled={pressed === true}>Clear</button>
                <button type='submit' class="buttonSub" onClick={whileAction} disabled={pressed === true} > Submit</button>
            </div>


        </div>
    );
}

export default Level5Controls;
