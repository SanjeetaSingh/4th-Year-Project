import React from 'react'
import Popup from 'react-popup';
import '../../Level1/Controls/Control.css'
import Check from '../L5-Control/L5-Check';

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
     * Sends an alert when a command must be used
     */
    function commandUse() {
        if (pressed === true && used !== true) {
            <div>
                {Popup.clearQueue()}
                {Popup.create({
                    title: 'No While Statement used!',
                    content: 'You failed you have to use while statement for this level!',
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


    /**
     * Sends an alert when user has passed the boundry of the board
     */
    function boundry() {
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Oops past the boundry',
                content: 'You have failed to get the dog to the goal!',
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
                                    window.location.replace("/level5")
                                    Popup.clearQueue();
                                    Popup.close()
                                }
                            }]
                        }
                    }, true)}
                </div>

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
            document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
            document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
            document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
            document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"

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
            commandUse()
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
            document.getElementById("action").innerHTML += item + "<br/>"
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
        document.getElementById("action").innerHTML = ""
    }



    const left = "{"
    const right = "}"


     /**
     * The information tab for the the user learn 
     * more about while loops definiton and syntax
     */
    function whileInformation() {
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'While statement Information',
                content: <p>
                    In Java a while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition.
                    The while loop can be thought of as a repeating if statement and a while loop in Java comes into use when we need to
                    repeatedly execute a block of statements.
                    <br /><br />
                    <b>i.e </b>  In the case of this level we are checking while the dog has not picked up the food then repeate the commands withing the block <br />
                    <br />
                    <b>Syntax:</b>  <br />
                    &nbsp; while (condtion)  {left}  <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right}
                </p>,
                buttons: {
                    right: [{
                        text: 'Okay',
                        action: function () {
                            Popup.clearQueue();
                            Popup.close()
                        }
                    }]
                }
            }, true)}

        </div>
    }

    return (
        <div class="level5Contain">
            <h2>Level 5:</h2>

            <div class="speech" >
                Your aim for this level is to help the dog get to the food, you have to use the while command to limit
                the amount of times you repeat the commands.<br /> Good luck! <br /> (To learn more about while statement click the i below)
            </div>
            <div class="borderPanel">

                <div class="toppart">
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
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
                <button type='submit' class="button" onClick={whileAction} disabled={pressed === true} > Submit</button>
            </div>


        </div>
    );
}

export default Level5Controls;