import React from 'react'
import Popup from 'react-popup';
import '../../Level1/Controls/Control.css'
import Check from '../../Level2/L2-Control/Check';

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
            if (element === "if") {
                ifAction()
            }
            if (element === "barks") {
                sound()
            }
            if (element === "elif") {
                jumpAction()
            }
        }
        statement()
        commandUse()
        Check()
        fallen()
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

        Check()
        ifAction()
        jumpAction()
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

        Check()
        ifAction()
        jumpAction()
        fallen()
        sound()
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
        sound()
        fallen()
    }



    /**
     * Method checks if the dog object is at the 
     * end postion and if the user has completed
     * the level successfully
     */
    function statement() {

        let dog = document.getElementById('dog');
        let food = document.getElementById('foodOne');

        if (dog != null || food != null) {
            const box = dog.parentElement;
            let foodbox = food.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))

            if (row === foodrow && col === foodcol) {
                document.getElementById('foodOne').src = "assets/dog.png"
                let change = document.getElementById('foodOne')
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

    function fallen() {

        let dog = document.getElementById('dog');
        let hole1 = document.getElementById('holeOne');
        let hole2 = document.getElementById('holeTwo');


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

                if (count <= 8) {
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

            if (hasJumped !== true) {
                if (row === hole2Row && col === hole2Col) {
                    document.getElementById('holeTwo').src = "assets/dog.png"

                    const change = document.getElementById('dog');
                    change.style.visibility = 'hidden'

                    if (count <= 8) {
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

    function jump() {
        let jumping = "jump"

        moves.push(jumping)

        value = "dog.jump"
        list.push(value)

        hasJumped = true

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

    const left = "{"
    const right = "}"

    function ifInformation() {
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'If statement Information',
                content: <p>
                    The Java if statement is the most simple decision-making statement. It is used to
                    decide whether a certain statement or block of statements will be executed or not. <br /><br />
                    <b>i.e </b> If a certain condition is true then a block of statement is executed otherwise not. <br /><br />
                    In the case of this level we are checking if the cat is present at all the make the dog bark<br />
                    <br />
                    <b>Syntax:</b>  <br />
                    &nbsp; if (condtion)  {left}  <br />
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

    function elseInformation() {
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Else statement Information',
                content: <p>
                    The Java else block is used to specify a new condition to test if the first condition is false. <br /><br />
                    <b>i.e </b> If a previour condition is not true then an alternative statement is executed. <br /><br />
                    In the case of this level we are checking if the cat is present then back else if there is a hole present then make the dog jump. <br />
                    <br />
                    <b>Syntax for else:</b>  <br />
                    &nbsp; if (condtion)  {left}  <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} else {left} <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} <br /><br />

                    <b>Syntax for else if:</b>  <br />
                    &nbsp; if (condtion)  {left}  <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} else if (condition) {left} <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} <br /><br />
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
            <h2>Level 4:</h2>

            <div class="speech" >
                Your aim for this level is to help the dog get past the obstacles present. You HAVE to use the if statement that will allow
                you to pass the cat. In this level you can jump over the hole to avoid restarting and you must use the else statement.<br /> Good luck! <br /> (To learn more about if statements click the i below)
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
                <div class="buttons-wrapper">
                    <button class="seemingly-inner-button" onClick={ifInformation} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button class="button" onClick={addIf} disabled={pressed === true}>
                        If Statement
                    </button>
                </div>
                <button type='submit' class="button" onClick={bark} disabled={pressed === true}>Bark</button>
                <div class="buttons-wrapper">
                    <button class="seemingly-inner-button" onClick={elseInformation} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button type='submit' class="button" onClick={elseIf} disabled={pressed === true}>Else If</button>

                </div>
                <button type='submit' class="button" onClick={jump} disabled={pressed === true}>Jump</button>
                <button type='submit' class="button" onClick={submit} disabled={pressed === true} > Submit</button>
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
            </div>


        </div>
    );
}

export default Level2Controls;