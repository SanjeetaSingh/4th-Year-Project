import React, { useState, useEffect } from 'react'
import Popup from 'react-popup';
import "../../Style/Control.css"
import Check from '../L14-Controls/L14-Check';
import whileInformation from '../../Informations/whileInformation-or';
import varInformation from '../../Informations/varBoolInformation';
import ifInformation from '../../Informations/ifInformation';
import boundry from '../../Checks/boundry';
import commandUse from '../../Checks/commandIfUse';

import { Howl } from 'howler';

const Level14Controls = () => {


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

    // Stores all the moves for cat 1
    let autoMoves = []

    // Stores all the moves for cat 2
    let autoMovesCat = []

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


    //Checking if the dog has reached a location 
    let reached = false

    //Checking if the dog is barking
    let barking = false

    //State to store input values
    const [val1, setVal1] = useState(false)

    //State for cats and setting cat state
    const [cats, setCats] = useState("")
    const [cats2, setCats2] = useState("")

    /**
    * The delay to get the dog walking a tile at a time
    * 
    * @param {*} time - the duration 
    * @returns a promise
    */
    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }


    //Looping trhough to move the first cat by itself
    for (let i = 0; i < 30; i++) {
        autoMoves.push("downCat")
        autoMoves.push("downCat")
        autoMoves.push("downCat")
        autoMoves.push("upCat")
        autoMoves.push("upCat")
        autoMoves.push("upCat")
    }

    //Looping trhough to move the first cat by itself
    for (let i = 0; i < 30; i++) {
        autoMovesCat.push("rightCat2")
        autoMovesCat.push("downCat2")
        autoMovesCat.push("leftCat2")
        autoMovesCat.push("rightCat2")
        autoMovesCat.push("upCat2")
        autoMovesCat.push("leftCat2")
    }


    /**
     * Submits the sequence that the user
     * has entered for the cat object to move.
     * The dog object will move after submit is called
     * in the useeffect.
     */
    const submitCat = async () => {

        let item = autoMoves.values();

        // Iterating through all the moves in the array to know which move to do
        for (let elements of item) {
            if (elements === "leftCat") {
                moveCatLeft()
                await delay(880)
            }
            if (elements === "rightCat") {
                moveCatRight()
                await delay(880);
            }
            if (elements === "downCat") {
                moveCatDown()
                await delay(880);
            }
            if (elements === "upCat") {
                moveCatUp()
                await delay(880);
            }
        }
        setCats(item)
    }

    /**
     * Submits the sequence that the user
     * has entered for the cat object to move.
     * The dog object will move after submit is called
     * in the useeffect.
     */
    const submitCat2 = async () => {

        let item = autoMovesCat.values();

        // Iterating through all the moves in the array to know which move to do
        for (let elements of item) {

            if (elements === "leftCat2") {
                moveCat2Left()
                await delay(880)
            }
            if (elements === "rightCat2") {
                moveCat2Right()
                await delay(880);
            }
            if (elements === "downCat2") {
                moveCat2Down()
                await delay(880);
            }
            if (elements === "upCat2") {
                moveCat2Up()
                await delay(880);
            }
        }
        setCats2(item)
    }


    useEffect(() => {
        if (!barking) {
            submitCat();
        }
        if (!barking) {
            submitCat2();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [], cats, cats2)

    /**
     * Moves the cat object one tile to the left
     */
    function moveCatLeft() {
        let element = document.getElementById('catOne');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }

    /**
     * Move the cat object one tile to the right
     */
    function moveCatRight() {
        let element = document.getElementById('catOne');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }


    /**
     * Moves the cat object one tile up
     */
    function moveCatUp() {
        let element = document.getElementById('catOne');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }

    /**
     * Moves the cat object one tile down
     */
    function moveCatDown() {
        let element = document.getElementById('catOne');
        if (element != null) {
            const box = element.parentElement;
            const row = parseInt(box.getAttribute('data-row')) + 1
            const col = parseInt(box.getAttribute('data-col'));
            const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

            if (newBox !== null || element !== null) {
                newBox.append(element);

            }
        }
    }


    /**
    * Moves the cat object one tile to the left
    */
    function moveCat2Left() {
        let element = document.getElementById('catTwo');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }

    /**
     * Move the cat object one tile to the right
     */
    function moveCat2Right() {
        let element = document.getElementById('catTwo');
        if (element != null) {
            const box = element.parentElement;
            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col')) + 1;
            const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


            if (newBox !== null || element !== null) {
                newBox.append(element);

            }

        }
    }


    /**
     * Moves the cat object one tile up
     */
    function moveCat2Up() {
        let element = document.getElementById('catTwo');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }

    /**
     * Moves the cat object one tile down
     */
    function moveCat2Down() {
        let element = document.getElementById('catTwo');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

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
        sound()
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


        if (col > 5) {
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
        sound()
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
        sound()
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


        if (row > 5) {
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
        sound()
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
                dog.style.visibility = 'hidden'
                let change = document.getElementById('food')
                change.style.visibility = 'visible';
                if (count <= 5) {
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
                                        window.location.replace("/level15")
                                        Popup.clearQueue();
                                        Popup.close()
                                    }
                                }]
                            }
                        }, true)}
                    </div>
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
    }


    /**
     * Method checks if the is statement 
     * created is acceptable and would actually 
     * work and if not then this method alerts
     * the user they have failed.
     */
    function failed() {
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Failed',
                content: 'You failed, the dog kept barking and stopped barking when there was a cat! Try Again!',
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
        </div >
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
            if (list.length <= 5) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 5) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/5"
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
            if (list.length <= 5) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 5) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/5"
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
            if (list.length <= 5) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 5) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/5"
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
            if (list.length <= 5) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 5) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/5"
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
        let foodOne = document.getElementById('food');




        if (dog != null || foodOne != null) {
            const box = dog.parentElement;
            const foodbox = foodOne.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))


            if ((row !== foodrow && col !== foodcol) || (row === foodrow && col !== foodcol) || (row !== foodrow && col === foodrow)) {
                reached = true;
            }

            while (reached) {

                if (val1 === "false") {
                    failed();
                    break;
                }

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
                        if (val1 === "true") {
                            sound()
                        }
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
            if (list.length <= 5) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 5) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/5"
                }
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
            if (list.length <= 5) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br />"
                document.getElementById("action").innerHTML += "} <br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 5) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/5"
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
        let cat = document.getElementById('catOne')
        let cat2 = document.getElementById('catTwo')


        if (dog != null || cat != null || cat2 != null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;
            let cat2Box = cat2.parentElement


            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))
            const catCol = parseInt(catBox.getAttribute('data-col'))

            const catRow2 = parseInt(cat2Box.getAttribute('data-row'))
            const catCol2 = parseInt(cat2Box.getAttribute('data-col'))

            if (row === catRow && col === catCol) {
                music.play()
                await delay(800)
            }
            if (row === catRow2 && col === catCol2) {
                music.play()
                await delay(800)
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

        if (val1 === "true") {
            value = "if (catPresent == true) {"
            list.push(value)
        }
        else if (val1 === "false") {
            value = "if (catPresent == false) {"
            list.push(value)
        }


        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 5) {
                document.getElementById("action").innerHTML += item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 5) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/5"
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
        let cat = document.getElementById('catOne')
        let catTwo = document.getElementById('catTwo')

        if (dog != null || cat != null || catTwo != null) {
            const box = dog.parentElement;
            let catBox = cat.parentElement;
            let cat2Box = catTwo.parentElement


            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const catRow = parseInt(catBox.getAttribute('data-row'))
            const catCol = parseInt(catBox.getAttribute('data-col'))

            const catRow2 = parseInt(cat2Box.getAttribute('data-row'))
            const catCol2 = parseInt(cat2Box.getAttribute('data-col'))

            if (val1 === "true") {
                if (row === catRow && col === catCol) {
                    const change = document.getElementById('catOne')
                    await delay(100)
                    change.style.visibility = 'hidden'
                }

                if (row === catRow2 && col === catCol2) {
                    const change = document.getElementById('catTwo')
                    await delay(100)
                    change.style.visibility = 'hidden'
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
        document.getElementById("count").innerHTML = "/5"
    }

    return (
        <div class="level13Contain">
            <h2 class="h26">Level 14:</h2>
            <div class="borderPanel">

                <div class="toppart13">
                    <div class="containing">
                        <p data-testid="counter" id="count" class="number">0/5</p>
                    </div>
                    <p class="titles">Enter Sequence:</p><br />

                    <div class='buttons-wrapper12'>
                        <button class="seemingly-inner-button12" onClick={varInformation} disabled={pressed === true}>
                            <i class="fa fa-info" ></i>   &nbsp;Variables
                        </button>
                        <p class="subtitles">Variable Declaration</p>
                    </div>

                    <form class="var14">
                        boolean catPresent =  <input id="var1" class="input" size="5" onChange={e => setVal1(e.target.value)}></input>  ;  &nbsp;  /**Hint: Check if the cat is true**/

                        <br />
                    </form>

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
                <button type='submit' class="button" onClick={bark} disabled={pressed === true}>Bark</button>
                <button type='submit' class="buttonClear" onClick={clearAll} disabled={pressed === true}>Clear</button>
                <button type='submit' class="buttonSub" onClick={whileAction} disabled={pressed === true} > Submit</button>
            </div>


        </div>
    );
}

export default Level14Controls;
