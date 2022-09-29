import React from 'react'
import Popup from 'react-popup';
import "../../Style/Control.css"
import Check from '../../Level2/L2-Control/Check';
import ifInformation from '../../Informations/ifInformation'
import boundry from '../../Checks/boundry'
import commandUse from '../../Checks/commandIfUse';

import { Howl } from 'howler';

const Level3Controls = () => {

    const music = new Howl({
        src: ['assets/bark.mp3']
    });

    /**
     * Variable
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

    //To see if a command is used or not
    let used = false


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
            if (element === "if") {
                ifAction()
            }
            if (element === "barks") {
                sound()
            }
        }
        statement()
        secondFoodAte()
        if (pressed === true && used !== true) {
            commandUse()
        }
        Check()
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

        if (col < 0) {
            boundry()
        }

        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row'))
        const col2 = parseInt(box2.getAttribute('data-col')) - 1;
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);

        if (col2 < 0) {
            boundry()
        }

        if (newBox2 !== null || dog2 !== null) {
            newBox2.append(dog2);

        }


        Check()
        ifAction()
        sound()
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

        if (col > 4) {
            boundry()
        }

        if (newBox !== null || element !== null) {
            newBox.append(element);

        }


        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row'))
        const col2 = parseInt(box2.getAttribute('data-col')) + 1;
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);

        if (col2 > 4) {
            boundry()
        }

        if (newBox2 !== null || dog2 !== null) {
            newBox2.append(dog2);

        }


        Check()
        ifAction()
        sound()
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

        if (row < 0) {
            boundry()
        }

        if (newBox !== null || element !== null) {
            newBox.append(element);
        }

        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row')) - 1
        const col2 = parseInt(box2.getAttribute('data-col'))
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);


        if (row2 < 0) {
            boundry()
        }

        if (newBox2 !== null || dog2 !== null) {
            newBox2.append(dog2);
        }

        Check()
        ifAction()
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
        if (row > 4) {
            boundry()
        }

        if (newBox !== null || element !== null) {
            newBox.append(element);
        }

        let dog2 = document.getElementById('dogTwo');
        const box2 = dog2.parentElement;
        const row2 = parseInt(box2.getAttribute('data-row')) + 1
        const col2 = parseInt(box2.getAttribute('data-col'))
        const newBox2 = document.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);

        if (row2 > 4) {
            boundry()
        }

        if (newBox2 !== null || dog2 !== null) {
            newBox2.append(dog2);
        }

        Check()
        ifAction()
        sound()
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
                                        window.location.replace("/level4")
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
     * Checks if thhe second bowl of food has been
     * picked up by the dog.
     */
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
                                        window.location.replace("/level4")
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
        let rights = "right"

        moves.push(rights)

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

    /**
     * The action that will take place when the 
     * user uses the if statement command. Checks
     * if the cat is one tile away from the dog
     * and moves the dog accordingly for the animation.
     */
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

    /**
     * Adds a string to an array to that
     * represents the if statement. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
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

    /**
     * Adds a string to an array to that
     * represents the bark command. This
     * will be compared in the submit method
     * this will make the dog bark when called. 
     */
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

    /**
     * This will be play the barking sound 
     * when the bark command is used to move the cat
     */
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
                Your aim for this level is to help both of the dogs to get the food bowls at the same time. The commands sequence will work for both of them but you
                will again need to use the if statement to move the cats from the way. Also be careful of the hole if the dog falls in the hole you will lose. 
                You have to use the same number or less number of commands mentioned in the top right corner.<br /> 
                Good luck! <br /> (To learn more about if statements click the i below)
            </div>
            <div class="borderPanel">

                <div class="toppart">
                    <div class="containing">
                        <p data-testid="counter" id="count" class="number">0/6</p>
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
                <button type='submit' class="button" onClick={submit} disabled={pressed === true} > Submit</button>
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
            </div>


        </div>
    );
}

export default Level3Controls;
