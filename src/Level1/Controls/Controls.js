import React from 'react'
import Popup from 'react-popup';
import "./Control.css"
import boundry from '../../Checks/boundry'

const Controls = () => {

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
     * Submits the sequence that the user
     * has entered for the dog object to move.
     * The dog object will move after submit is pressed
     */
    const submit = async () => {

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
        statement()
    }


    /**
     * Moves the dog object one tile to the left
     */
    function moveLeft() {
        let element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (col < 0){
            boundry()
        }
        
        if (newBox !== null || element !== null) {
            newBox.append(element);

        }
    }

    /**
     * Move the dog object one tile to the right
     */
    function moveRight() {
        let element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (col > 6){
            boundry()
        }
        
        if (newBox !== null || element !== null) {
            newBox.append(element);

        }
    }


    /**
     * Moves the dog object one tile up
     */
    function moveUp() {
        let element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        
        if (row < 0){
            boundry()
        }
        
        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }

    /**
     * Moves the dog object one tile down
     */
    function moveDown() {
        let element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        
        if (row > 6){
            boundry()
        }
        
        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

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
                if (count <= 10) {
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
                                        window.location.replace("/level2")
                                        Popup.clearQueue();
                                        Popup.close();

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
        let left = "left"

        moves.push(left)

        value = "moveLeft();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]
        if (pressed !== true) {
            if (list.length <= 10) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 10) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/10"
                }
            }
        }
    }


    /**
     * Adds a string to an array to that
     * represents the movement right. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addRight() {
        let right = "right"

        moves.push(right)

        value = "moveRight();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 10) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 10) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/10"
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
            if (list.length <= 10) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 10) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/10"
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
            if (list.length <= 10) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 10) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/10"
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
        document.getElementById("count").innerHTML = "/10"
    }

    return (
        <div class="containers">
            <h2>Level 1:</h2>
            <div class="bubble" >
                Hi there! Your aim for this level is to get the dog to the food with the command butttons below. You are only allowed to use 10 commands for your
                sequence, so try to find the shortest path to get to the food. Once you are done with creating your sequence then go ahead and click the submit button! <br />
                Good Luck!
            </div>

            <div class="borderPanel">
                <div class="toppart">
                    <div class="containing">
                        <p id="count" class="number">0/10</p>
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
                <button type='submit' class="button" onClick={submit} disabled={pressed === true} > Submit</button>
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
            </div>


        </div>
    );
}

export default Controls;
