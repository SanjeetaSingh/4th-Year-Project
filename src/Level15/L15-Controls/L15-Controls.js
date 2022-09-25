import React, { useState, useEffect } from 'react'
import Popup from 'react-popup';
import "../../Style/Control.css"
import Check from '../L15-Controls/L15-Check';
import whileInformation from '../../Informations/whileInformation-or';
import varInformation from '../../Informations/varInformation';
import hint from '../../Informations/hint';
import boundry from '../../Checks/boundry';
import commandUse from '../../Checks/commandIfUse';
import pawCheck from './pawCheck'

const Level15Controls = () => {
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


    //Checking if the dog has reached a location 
    let reached = false

    //Checking if the dog has jumped
    let hasJumped = false


    let [val1, setVal1] = useState(0)
    let [val2, setVal2] = useState(0)

    /**
    * The delay to get the dog walking a tile at a time
    * 
    * @param {*} time - the duration 
    * @returns a promise
    */
    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }

    useEffect(() => {
        let bone = document.getElementById('food')
        if (bone !== null) {
            bone.style.visibility = 'hidden'
            console.log(bone)
        }
    })
    let bone = document.getElementById('food')
    if (bone !== null) {
        bone.style.visibility = 'hidden'
        console.log(bone)
    }

    /**
     * Moves the dog object one tile to the left
     */
    function moveLeft() {
        let element = document.getElementById('dog');

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

        if (row === val1 && col === val2) {
            reached = false
        }
        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

        }

        Check()
        pawCheck()
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

        if (col > 2) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === val1 && col === val2) {
            reached = false
        }

        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

        }

        Check()
        pawCheck()
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

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === val1 && col === val2) {
            reached = false
        }

        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

        }
        console.log(val1, val2)

        Check()
        pawCheck()

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

        if (row > 2) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row === val1 && col === val2) {
            reached = false
        }

        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

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

            const foodRow = parseInt(foodbox.getAttribute('data-row'))
            const foodCol = parseInt(foodbox.getAttribute)


            if (row === foodRow && col === 0) {
                document.getElementById('food').src = "assets/dog.png"
                dog.style.visibility = 'hidden'
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
                                        window.location.replace("/level15")
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
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
        let foodOne = document.getElementById('food');

        if (dog != null || foodOne != null) {
            const box = dog.parentElement;
            const foodbox = foodOne.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            let foodrow = parseInt(foodbox.getAttribute('data-row'))
            let foodcol = parseInt(foodbox.getAttribute('data-col'))

            console.log(foodrow, "row")
            val1 = foodrow;
            val2 = foodcol


            if ((row !== val1 && col !== val2) || (row === val1 && col !== val2) || (row !== val1 && col === val2)) {
                reached = true;
            }

            while (reached) {

                if (val1 > foodrow || val2 > foodcol || val1 < foodrow || val2 < foodcol) {
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

        value = "while (bone != row && bone != col) {"
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

    return (
        <div class="level13Contain">
            <h2>Level 15:</h2>

            <div class="speech13" >
                It gets a little tricky here, the dog has hid his bone and you have to help him find it. The problem is that you don't know the row or column the
                bone is at. There is a class Bone as seen on the bottom left corner, this class is going to help you to get the location of the bone. What you
                have to do is in the input field call on the class bone and the varible name that is passed through.
                The variables will be used in the while loop as a condtion to stop looping through the commands. Use the same amount or less amount of commands mentioned in the top right corner.
                The paw prints are a hint on which direction the bone can be. 
                <br /><br />

                <p class="hints">There is a hint button below that can get you started on if you are stuck.
                    Click on the information buttons in the Bone class to learn about what is happening in the class and to learn about the private and public modifiers.
                    <br /> Good luck! <br /> (To learn more about while, understand the while loop condition and how variables work click the i's below)</p>
            </div>
            <div class="borderPanel">

                <div class="toppart13">
                    <div class="containing">
                        <p id="count" class="number">0/3</p>

                    </div>
                    <button class="seemingly-inner-button-hint" onClick={hint} disabled={pressed === true}>
                        Hint
                    </button>
                    <p class="titles">Enter Sequence:</p><br />

                    <div class='buttons-wrapper12'>
                        <button class="seemingly-inner-button12" onClick={varInformation} disabled={pressed === true}>
                            <i class="fa fa-info" ></i>   &nbsp;Variables
                        </button>
                        <p class="subtitles">Variable Declaration</p>
                    </div>
                    <div class='buttons-wrapper12'>
                        <p class="bones">Bone bone = new Bone()</p>
                    </div>
                    <form class="var">
                        int row =  <input id="var1" class="input" size="5" onChange={e => setVal1(parseInt(e.target.value))}></input>   ; <br />
                        <br />
                        int col = <input id="var2" class="input" size="5" onChange={e => setVal2(parseInt(e.target.value))}></input>  ;
                        <br /><br />
                    </form>
                    <p id="action" class="lists"></p>

                </div>

            </div>

            <div class="outside15">
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

export default Level15Controls;
