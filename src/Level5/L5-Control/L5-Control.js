import React from 'react'
import Popup from 'react-popup';
import '../../Level1/Controls/Control.css'
import Check from '../../Level2/L2-Control/Check';

import { Howl } from 'howler';

const Level5Controls = () => {

    const music = new Howl({
        src: ['assets/bark.mp3']
    });

    /**
     * letiables
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

    let used = false

    let hasJumped = false



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
            if (element === "while") {
                ifAction()
            }
        }
        statement()
        commandUse()
        Check()
    }

    function commandUse() {
        if (pressed === true && used !== true) {
            <div>
                {Popup.clearQueue()}
                {Popup.create({
                    title: 'No If Statement used!',
                    content: 'You failed you have to use if statement for this level!',
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
     * Moves the dog object one tile to the left
     */
    function moveLeft() {
        let element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        Check()
        ifAction()
        jumpAction()
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
        newBox.append(element);

        Check()
        ifAction()
        jumpAction()
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
        newBox.append(element);

        Check()
        ifAction()
        jumpAction()
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
        newBox.append(element);

        Check()
        ifAction()
        jumpAction()
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
                change.style.visibility = 'visible'
                if (count <= 8) {
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
                                        window.reload(true)
                                        Popup.clearQueue();
                                        Popup.close()
                                    }
                                }]
                            }
                        }, true)}
                    </div>
                }
            }

            else {
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
            if (list.length <= 8) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 8) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/8"
                }
            }
        }
    }


    /**
     * Adds a string to an array to thatchange.style.visibility = 'visible'
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
            if (list.length <= 8) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 8) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/8"
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
            if (list.length <= 8) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 8) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/8"
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
            if (list.length <= 8) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 8) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/8"
                }
            }
        }
    }

    const ifAction = async () => {
        let dog = document.getElementById('dog');
        let cat = document.getElementById('cat')

        if (dog != null || cat != null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;


            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))

            if (row === catRow && col === 2) {
                const change = document.getElementById('cat')
                await delay(800)
                change.style.visibility = 'hidden'
                await delay(200)
                change.style.visibility = 'visible'
                document.getElementById('cat').src = "assets/dog.png"
                await delay(700)
                change.style.visibility = 'hidden'
            }
        }
    }

    const jumpAction = async () => {
        let dog = document.getElementById('dog');
        let hole = document.getElementById('holeTwo')

        if (dog != null || hole != null) {
            const box = dog.parentElement;
            let holeBox = hole.parentElement;


            let row = parseInt(box.getAttribute('data-row'))
            let col = parseInt(box.getAttribute('data-col'))

            const holeRow = parseInt(holeBox.getAttribute('data-row'))

            if (hasJumped === true) {
                if (row === holeRow && col === 3) {
                    // console.log("ah")
                    const change = document.getElementById('holeTwo')
                    await delay(800)
                    change.style.visibility = 'visible'
                    document.getElementById('holeTwo').src = "assets/hole.png"

                }
            }

        }

    }

    function addIf() {
        let ifS = "if"

        moves.push(ifS)

        used = true

        value = "if (cat == true) {"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 8) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 8) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/8"
                }
            }

            ifAction()
        }

    }

    function elseIf() {
        let elif = "elif"

        moves.push(elif)

        used = true

        value = "else if (hole == true) {"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 8) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 8) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/8"
                }
            }
            jumpAction()
        }
    }


    function bark() {
        let barks = "barks"

        moves.push(barks)

        value = "dog.bark"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 8) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br />"
                document.getElementById("action").innerHTML += "} <br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 8) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/8"
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
        document.getElementById("count").innerHTML = "/8"
    }

    return (
        <div class="level2Contain">
            <h2>Level 5:</h2>

            <div class="speech" >
                Your aim for this level is to help the dog get to the food, you have to use the while command to limit 
                the amount of times you repeat the commands.<br /> Good luck! <br /> (To learn more about while statement click the i below)
            </div>
            <div class="borderPanel">

                <div class="toppart">
                    <div class="containing">
                        <p id="count" class="number">0/8</p>
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
                <button type='submit' class="button" onClick={addRight} disabled={pressed === true} >While</button>
                <button type='submit' class="button" onClick={submit} disabled={pressed === true} > Submit</button>
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
            </div>


        </div>
    );
}

export default Level5Controls;
