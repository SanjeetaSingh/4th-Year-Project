import React from 'react'
import Popup from 'react-popup';
import '../../Controls/Control.css'


import { Howl } from 'howler';

const Level2Controls = () => {



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
            if (element === "if") {
                ifAction()
            }
            if (element === "barks") {
                sound()
            }
        }
        statement()
        changed()
        fallen()
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

        changed()
        ifAction()
        sound()
        fallen()
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

        changed()
        ifAction()
        sound()
        fallen()
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

        changed()
        ifAction()
        fallen()
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

        changed()
        ifAction()
        sound()
        fallen()
    }

    function changed() {
        let dog = document.getElementById('dog');
        let foodBowl1 = document.getElementById('foodOne')
        let foodBowl2 = document.getElementById('foodTwo')

        if (dog != null || foodBowl1 != null || foodBowl2 != null) {
            const box = dog.parentElement;
            let foodbox = foodBowl1.parentElement;
            let foodBox2 = foodBowl2.parentElement

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const bowlRow1 = parseInt(foodbox.getAttribute('data-row'))
            const bowlCol1 = parseInt(foodbox.getAttribute('data-col'))

            const bowlRow2 = parseInt(foodBox2.getAttribute('data-row'))
            const bowlCol2 = parseInt(foodBox2.getAttribute('data-col'))

            if (row === bowlRow1 && col === bowlCol1) {
                document.getElementById('foodOne').src = "assets/dog.png"
                // change.style.visibility = 'hidden'

            }
            if (row === bowlRow2 && col === bowlCol2) {
                document.getElementById('foodTwo').src = "assets/dog.png"

                // change.style.visibility = 'hidden'
            }
        }
    }

    /**
     * Method checks if the dog object is at the 
     * end postion and if the user has completed
     * the level successfully
     */
    function statement() {

        let dog = document.getElementById('dog');
        let food = document.getElementById('foodOne');
        let food2 = document.getElementById('foodTwo');


        if (dog != null || food != null || food2 != null) {
            const box = dog.parentElement;
            let foodbox = food.parentElement;
            let foodBox2 = food2.parentElement

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))

            const foodrow2 = parseInt(foodBox2.getAttribute('data-row'))
            const foodcol2 = parseInt(foodBox2.getAttribute('data-col'))

            if (row === foodrow && col === foodcol) {
                document.getElementById('foodOne').src = "assets/dog.png"
                let change = document.getElementById('foodOne')
                change.style.visibility = 'visible'
                if (count <= 14) {
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
                                        window.location.reload(true)
                                        //instead of reloading the page i will have to move to next level
                                        Popup.clearQueue();
                                        Popup.close()
                                    }
                                }]
                            }
                        }, true)}
                    </div>
                }
            }
            else if (row === foodrow2 && col === foodcol2) {
                document.getElementById('foodTwo').src = "assets/dog.png"
                let change = document.getElementById('foodTwo')
                change.style.visibility = 'visible'
                if (count <= 14) {
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
                                        // window.location.reload(true)
                                        //instead of reloading the page i will have to move to next level
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

    function fallen() {

        let dog = document.getElementById('dog');
        let hole1 = document.getElementById('holeOne');
        let hole2 = document.getElementById('holeTwo')

        if (dog != null || hole1 != null || hole2 != null) {
            const box = dog.parentElement;
            let holeBox = hole1.parentElement;
            let hole2Box = hole2.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const hole1Row = parseInt(holeBox.getAttribute('data-row'))
            const hole1Col = parseInt(holeBox.getAttribute('data-col'))

            const hole2Row = parseInt(hole2Box.getAttribute('data-row'))
            const hole2Col = parseInt(hole2Box.getAttribute('data-col'))

            if (row === hole1Row && col === hole1Col) {
                document.getElementById('holeOne').src = "assets/dog.png"

                const change = document.getElementById('dog');
                change.style.visibility = 'hidden'

                if (count <= 14) {
                    <div>
                        {Popup.clearQueue()}
                        {Popup.create({
                            title: 'Failed',
                            content: 'The dog fell in one of the holes! Try again!',
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
            } else if (row === hole2Row && col === hole2Col) {
                document.getElementById('holeTwo').src = "assets/dog.png"

                const change = document.getElementById('dog')
                change.style.visibility = 'hidden'

                if (count <= 14) {
                    <div>
                        {Popup.clearQueue()}
                        {Popup.create({
                            title: 'Failed',
                            content: 'The dog fell in one of the holes! Try again!',
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
            if (list.length <= 14) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            for (const element of commands) {
                total = element
                document.getElementById("count").innerHTML = total + "/14"
            }
        }
    }


    /**
     * Adds a string to an array to thatchange.style.visibility = 'visible'
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
            if (list.length <= 14) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            for (const element of commands) {
                total = element
                document.getElementById("count").innerHTML = total + "/14"
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
            if (list.length <= 14) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            for (const element of commands) {
                total = element
                document.getElementById("count").innerHTML = total + "/14"
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
            if (list.length <= 14) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            for (const element of commands) {
                total = element
                document.getElementById("count").innerHTML = total + "/14"
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
                await delay(100);
                const change = document.getElementById('cat')
                change.style.visibility = 'hidden'
                await delay(800)
                change.style.visibility = 'visible'
                document.getElementById('cat').src = "assets/dog.png"
                await delay(700)
                change.style.visibility = 'hidden'
            }
        }
    }

    function addIf() {
        let ifS = "if"

        moves.push(ifS)

        value = "if cat == dog {"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 14) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            for (const element of commands) {
                total = element
                document.getElementById("count").innerHTML = total + "/14"
            }

            ifAction()
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
            if (list.length <= 14) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br />"
                document.getElementById("action").innerHTML += "} <br/>"
            }
            count += 1
            commands.push(count)

            for (const element of commands) {
                total = element
                document.getElementById("count").innerHTML = total + "/14"
            }
        }
    }

    const sound = async () => {
        let dog = document.getElementById('dog');
        let cat = document.getElementById('cat')

        if (dog != null || cat != null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;


            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))

            if (row === catRow && col === 2) {
                console.log("bark")
                music.play()
                await delay(800)

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
        document.getElementById("count").innerHTML = "/14"
    }

    return (
        <div class="level2Contain">
            <div class="borderPanel">
                <h2>Level 2:</h2>
                <div class="toppart">
                    <div class="containing">
                        <p id="count" class="number">0/14</p>
                    </div>
                    <p class="titles">Sequence:</p>
                    <p id="action" class="lists"></p>

                </div>

                <div class="speech bubble-bottom-left" >
                    Hi there! Your aim for this level is to help the owner get their dog past the obstacles present, such as the holes and the cat,
                    and get the dog to both of the food bowls. If the dog lands on one of the holes then the game will restart, however if the the
                    dog is less than 1 tile away from the cat obstacle the dog must bark to scare off the cat however if the dog doesn't bark the cat will scare the dog
                    and will make you restart the level. For this level you must use an if statement as part of your souliton and try to use only 14 or less commands as your sequence.
                    Once you are done with creating your sequence then go ahead and click the submit button! <br /> Good luck!
                </div>
            </div>

            <div class="outside">
                <button type='submit' class="button" onClick={addLeft} disabled={pressed === true} >Left</button>
                <button type='submit' class="button" onClick={addUp} disabled={pressed === true} >Up</button>
                <button type='submit' class="button" onClick={addDown} disabled={pressed === true} >Down</button>
                <button type='submit' class="button" onClick={addRight} disabled={pressed === true} >Right</button>
                <button type='submit' class="button" onClick={addIf} disabled={pressed === true}>If statement</button>
                <button type='submit' class="button" onClick={bark} disabled={pressed === true}>Bark</button>
                <button type='submit' class="button" onClick={submit} disabled={pressed === true} > Submit</button>
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
            </div>


        </div>
    );
}

export default Level2Controls;
