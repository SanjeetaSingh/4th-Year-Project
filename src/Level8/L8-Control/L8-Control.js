import React from 'react'
import Popup from 'react-popup';
import "../../Style/Control.css"
import Check from '../L8-Control/L8-Check';
import ifInformation from '../../Informations/ifInformation';
import whileInformation from '../../Informations/whileInformation';
import elseInformation from '../../Informations/elseInformation';
import boundry from '../../Checks/boundry';
import commandUse from '../../Checks/commandIfUse';

import { Howl } from 'howler';

const Level8Controls = () => {

    const music = new Howl({
        src: ['assets/bark.mp3']
    });

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

    //To see if a command is used or not
    let used = false

    //Checking if the dog has jumped
    let hasJumped = false

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

        let food = document.getElementById('food');
        let foodbox = food.parentElement;
        const foodrow = parseInt(foodbox.getAttribute('data-row'))
        const foodcol = parseInt(foodbox.getAttribute('data-col'))

        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (col > 3) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === foodrow && col === foodcol) {
            reached = false
        }

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
        ifAction()
        jumpAction()
        sound()
        fallen()
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


        if (row > 2) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === foodrow && col === foodcol) {
            reached = false
        }

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
                if (count <= 7) {
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
                                        window.location.replace("/level7")
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
     * Check if the dog has fallen in any of the holes
     * and notifying the user they have lost and restarting 
     * the game if they did fall in any holes.
     */
    function fallen() {

        let dog = document.getElementById('dog');
        let hole = document.getElementById('hole');


        if (dog != null || hole != null) {
            const box = dog.parentElement;
            let hole2Box = hole.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))
            const holeRow = parseInt(hole2Box.getAttribute('data-row'))
            const holeCol = parseInt(hole2Box.getAttribute('data-col'))

            if (hasJumped !== true) {
                if (row === holeRow && col === holeCol) {
                    document.getElementById('hole').src = "assets/dog.png"

                    const change = document.getElementById('dog');
                    change.style.visibility = 'hidden'

                    if (count <= 5) {
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
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
                    if (element === "if") {
                        await delay(70);
                        ifAction()
                    }
                    if (element === "barks") {
                        sound()
                    }
                    if (element === "elif") {
                        jumpAction()
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
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
        let cat = document.getElementById('cat');
        let catTwo = document.getElementById('catTwo');
        let catThree = document.getElementById('catThree');

        if (dog != null || cat != null || catTwo != null || catThree !== null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;
            let catTwoBox = catTwo.parentElement;
            let catThreeBox = catThree.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))
            const catTwoRow = parseInt(catTwoBox.getAttribute('data-row'))
            const catThreeRow = parseInt(catThreeBox.getAttribute('data-row'))

            if (row === catRow && col === 2) {
                const change = document.getElementById('cat')
                await delay(400)
                document.getElementById('cat').src = "assets/dog.png"
                await delay(200)
                change.style.visibility = 'hidden'
            }
            else if (row === catTwoRow && col === 2) {
                const change = document.getElementById('catTwo')
                const a = document.getElementById('dog')
                a.style.visibility = 'hidden'
                await delay(400)
                document.getElementById('catTwo').src = "assets/dog.png"
                await delay(400)
                change.style.visibility = 'hidden'
                await delay(100)
                a.style.visibility = 'visible'
            }
            else if (row === catThreeRow && col === 0) {
                const change = document.getElementById('catThree')
                const a = document.getElementById('dog')
                a.style.visibility = 'hidden'
                await delay(400)
                document.getElementById('catThree').src = "assets/dog.png"
                await delay(200)
                change.style.visibility = 'hidden'
            }
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br />"
                document.getElementById("action").innerHTML += "} <br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
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
        let cat = document.getElementById('cat')
        let catTwo = document.getElementById('catTwo')
        let catThree = document.getElementById('catThree')

        if (dog != null || cat != null || catTwo !== null || catThree !== null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;
            let catTwoBox = catTwo.parentElement;
            let catThreeBox = catThree.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))
            const catTwoRow = parseInt(catTwoBox.getAttribute('data-row'))
            const catThreeRow = parseInt(catThreeBox.getAttribute('data-row'))

            if (row === catRow && col === 1) {
                music.play()
                await delay(800)

            }
            if (row === catTwoRow && col === 0) {
                music.play()
                await delay(800)
            }
            if (row === catThreeRow && col === 2) {
                music.play()
                await delay(800)
            }
        }
    }

    /**
    * Adds a string to an array to that
    * represents the movement jump. This
    * will be compared in the submit method
    * that will move the dog object at the end
    */
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br />"
                document.getElementById("action").innerHTML += "} <br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
                }
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
            if (list.length <= 7) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 7) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/7"
                }
            }
        }

    }

    /**
   * The action that will take place when the 
   * user uses the jump command and moves the
   * dog accordingly for the animation.
   */
    const jumpAction = async () => {
        let dog = document.getElementById('dog');
        let hole = document.getElementById('hole')

        if (dog != null || hole != null) {
            const box = dog.parentElement;
            let holeBox = hole.parentElement;


            let row = parseInt(box.getAttribute('data-row'))
            let col = parseInt(box.getAttribute('data-col'))

            const holeRow = parseInt(holeBox.getAttribute('data-row'))

            if (hasJumped === true) {
                if (row === holeRow && col === 1) {

                    let jumpCol = parseInt(box.getAttribute('data-col')) + 1
                    const newBox = document.querySelector(`[data-row="${row}"][data-col="${jumpCol}"]`);
                    newBox.append(dog)
                    
                }
            }

        }

    }

    /**
     * Adds a string to an array to that
     * represents the else if statement. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
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
        document.getElementById("count").innerHTML = "/7"
    }


    return (
        <div class="level5Contain">
            <h2>Level 8:</h2>

            <div class="speech" >
                Your aim for this level is to help the dog get to the food, you have to use the while command to limit
                the amount of times you repeat the commands. You have use the if statement to avoid the cats and reach the food.
                Use the else if to jump over the hole obstacle and use the same number or less number of commands mentioned in the top right corner.
                <br /> Good luck! <br /> (To learn more about while, if statement and else if click the i below)
            </div>
            <div class="borderPanel">

                <div class="toppart">
                    <div class="containing">
                        <p id="count" class="number">0/7</p>
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
                <div class="buttons-wrapper5">
                    <button class="seemingly-inner-button" onClick={ifInformation} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button class="button" onClick={addIf} disabled={pressed === true}>
                        If Statement
                    </button>
                </div>
                <div class="buttons-wrapper5">
                    <button class="seemingly-inner-button" onClick={elseInformation} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button type='submit' class="button" onClick={elseIf} disabled={pressed === true}>Else If</button>

                </div>
                <button type='submit' class="button" onClick={jump} disabled={pressed === true}>Jump</button>

                <button type='submit' class="button" onClick={bark} disabled={pressed === true}>Bark</button>
                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
                <button type='submit' class="button" onClick={whileAction} disabled={pressed === true} > Submit</button>
            </div>


        </div>
    );
}

export default Level8Controls;
