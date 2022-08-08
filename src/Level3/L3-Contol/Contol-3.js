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
        secondFoodAte()
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


        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row'))
        const col2 = parseInt(box2.getAttribute('data-col')) - 1;
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);
        newBox2.append(dog2);

        Check()
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

        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row'))
        const col2 = parseInt(box2.getAttribute('data-col')) + 1;
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);
        newBox2.append(dog2);

        Check()
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

        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row')) - 1
        const col2 = parseInt(box2.getAttribute('data-col'))
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);
        newBox2.append(dog2);

        Check()
        ifAction()
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

        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row')) + 1
        const col2 = parseInt(box2.getAttribute('data-col'))
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);
        newBox2.append(dog2);

        Check()
        ifAction()
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
                if (count <= 6) {
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

    function secondFoodAte() {

        let dog = document.getElementById('dogTwo');
        let food = document.getElementById('foodTwo');

        if (dog != null || food != null) {
            const box = dog.parentElement;
            let foodbox = food.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))

            if (row === foodrow && col === foodcol) {
                document.getElementById('foodTwo').src = "assets/dog.png"
                let change = document.getElementById('foodOne')
                change.style.visibility = 'visible'
                if (count <= 6) {
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

        if (dog != null || hole1 != null) {
            const box = dog.parentElement;
            let holeBox = hole1.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const hole1Row = parseInt(holeBox.getAttribute('data-row'))
            const hole1Col = parseInt(holeBox.getAttribute('data-col'))


            if (row === hole1Row && col === hole1Col) {
                document.getElementById('holeOne').src = "assets/dog.png"

                const change = document.getElementById('dog');
                change.style.visibility = 'hidden'

                if (count <= 6) {
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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 6) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/6"
                }
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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 6) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/6"
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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }

            count += 1
            commands.push(count)

            if (count <= 6) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/6"
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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 6) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/6"
                }
            }
        }
    }

    const ifAction = async () => {
        let dog = document.getElementById('dog');
        let cat = document.getElementById('cat')

        let dog2 = document.getElementById('dogTwo');
        let cat2 = document.getElementById('catTwo')

        if (dog != null || cat != null || dog2 != null || cat2 != null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;

            const box2 = dog2.parentElement;
            let catBox2 = cat2.parentElement;


            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const row2 = parseInt(box2.getAttribute('data-row'))
            const col2 = parseInt(box2.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))
            const catRow2 = parseInt(catBox2.getAttribute('data-row'))

            if (row === catRow && col === 2) {
                const change = document.getElementById('cat')
                await delay(600)
                change.style.visibility = 'hidden'
                await delay(200)
                change.style.visibility = 'visible'
                document.getElementById('cat').src = "assets/dog.png"
                await delay(700)
                change.style.visibility = 'hidden'
            }
            else if (row2 === catRow2 && col2 === 3) {
                const change = document.getElementById('catTwo')
                const a = document.getElementById('dogTwo')
                await delay(600)
                change.style.visibility = 'hidden'
                a.style.visibility = 'hidden'

                await delay(200)
                a.style.visibility = 'hidden'
                change.style.visibility = 'visible'
                document.getElementById('catTwo').src = "assets/dog.png"

                await delay(800)
                change.style.visibility = 'hidden'
                a.style.visibility = 'visible'
                await delay(700)
                a.style.visibility = 'hidden'
                change.style.visibility = 'hidden'

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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 6) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/6"
                }
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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br />"
                document.getElementById("action").innerHTML += "} <br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 6) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/6"
                }
            }
        }
    }

    const sound = async () => {
        let dog = document.getElementById('dog');
        let cat = document.getElementById('cat');

        let dog2 = document.getElementById('dogTwo');
        let cat2 = document.getElementById('catTwo')

        if (dog != null || cat != null || dog2 != null || cat2 != null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;

            const box1 = dog2.parentElement;
            let catBox2 = cat2.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const row2 = parseInt(box1.getAttribute('data-row'))
            const col2 = parseInt(box1.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))

            const catRow2 = parseInt(catBox2.getAttribute('data-row'))

            if (row2 === catRow2 && col2 === 3) {
                console.log("bark")
                music.play()
                await delay(800)
            } else if (row === catRow && col === 2) {
                console.log("bark2")
                music.play()
                await delay(800)
            }

        }
    }

    const left = "{"
    const right = "}"

    function information() {
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'If statement Information',
                content: <p>
                    The Java if statement is the most simple decision-making statement. It is used to
                    decide whether a certain statement or block of statements will be executed or not. <br /><br />
                    <b>i.e </b> If a certain condition is true then a block of statement is executed otherwise not. <br /><br />
                    In the case of this level we are checking if the dogs tile is one tile away from the cat then we execute the statement to make the dog bark. <br />
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
        document.getElementById("count").innerHTML = "/6"
    }

    return (
        <div class="level2Contain">
            <h2>Level 3:</h2>

            <div class="speech" >
                Hi there! Your aim for this level is to help the dog get past the obstacles present. You HAVE to use the if statement that will allow
                you to pass the cat. The cat can only be passed if the dog barks. Use the commands below to create a sequence to get the food bowls. The limit of commands
                this time is 6. Also be careful of the hole if the dog falls in the hole you will lose<br /> Good luck! <br /> (To learn more about if statements click the i below)
            </div>
            <div class="borderPanel">

                <div class="toppart">
                    <div class="containing">
                        <p id="count" class="number">0/6</p>
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
                    <button class="seemingly-inner-button" onClick={information} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button class="button" onClick={addIf} disabled={pressed === true}>
                        If Statement
                    </button>
                </div>
                <button type='submit' class="button" onClick={bark} disabled={pressed === true}>Bark</button>
                <button type='submit' class="button" onClick={submit} disabled={pressed === true} > Submit</button>
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
            </div>


        </div>
    );
}

export default Level2Controls;
