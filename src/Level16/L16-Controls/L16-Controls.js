import React, { useState, useEffect } from 'react'
import Popup from 'react-popup';
import "../../Style/Control.css"
import Check from './L16-Check';
import whileInformation from '../../Informations/whileInformation-or';
import varInformation from '../../Informations/varInformation';
import ifInformation from '../../Informations/ifInformation';
import hint from '../../Informations/hint';
import boundry from '../../Checks/boundry';
import commandUse from '../../Checks/commandIfUse';
import pawCheck from './pawCheck'

const Level16Controls = () => {
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


    // Tor store input values
    let [val1, setVal1] = useState(0)
    let [val2, setVal2] = useState(0)
    let [val3, setVal3] = useState(0)

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
        
        }
    })

    let bone = document.getElementById('food')
    if (bone !== null) {
        bone.style.visibility = 'hidden'
       
    }

    /**
     * Moves the dog object one tile to the left
     */
    function moveLeft() {
        let element = document.getElementById('dog');

        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;

        if (col < 0 || row < 0) {
            boundry()
        }

        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

        }

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

        if (col > 4) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }

        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

        }
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

        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

        }
    
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

        if (row > 4) {
            boundry()
        }

        if (element !== null || newBox !== null) {
            newBox.append(element);
        }
        if (row !== val1 && col !== val2) {
            let bone = document.getElementById('food')
            bone.style.visibility = 'visible'

        }
        pawCheck()
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

            if (row === foodRow && col === 1) {
                document.getElementById('food').src = "assets/dog.png"
                dog.style.visibility = 'hidden'
                let change = document.getElementById('food')
                change.style.visibility = 'visible';
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
                                        window.location.replace("/level16")
                                        Popup.clearQueue();
                                        Popup.close()
                                    }
                                }]
                            }
                        }, true)}
                    </div>
                }
            } else if (val3 >= 2) {
                <div>
                    {Popup.clearQueue()}
                    {Popup.create({
                        title: 'Failed',
                        content: 'Oops it seems like you have entered an inccorect value for the steps variable! Remember that the steps count startes from 0. Try Again!',
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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
                document.getElementById("action").innerHTML += "&emsp;" + item + "<br/>"
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
     * Submits the sequence that the user
     * has entered for the dog object to move.
     * The dog object will move after submit is pressed
     * and in a for loop. 
     */
    const forAction = async () => {

        value = "}"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            document.getElementById("action").innerHTML += "<br/>" + item + "<br/>"
        }

        for (let i = 0; i <= val3; i++) {

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
            }

        }
        statement()
        if (pressed === true && used !== true) {
            commandUse()
        }
    }


    /**
     * Adds a string to an array to that
     * represents the for loop command. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addFor() {
        used = true

        value = "for steps.times {"
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
     * represents the if statement. This
     * will be compared in the submit method
     * that will move the dog object at the end
     */
    function addIf() {
        let ifS = "if"

        moves.push(ifS)

        used = true

        value = "if (dog == row && dog == col) {"
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
        let food = document.getElementById('food');



        if (dog != null || food != null) {
            const box = dog.parentElement;
            const foodbox = food.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            let foodrow = parseInt(foodbox.getAttribute('data-row'))
            let foodcol = parseInt(foodbox.getAttribute('data-col'))

            val1 = foodrow;
            val2 = foodcol

            if (row === val1 && col === val2) {
                //
            }
        }
    }


    /**
     * This is just to let the user know
     * that the dog has picked up the bone
     */
    function boneFound() {
        let ifS = "boneFound"

        moves.push(ifS)

        used = true

        value = "bone.found()"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 6) {
                document.getElementById("action").innerHTML += "&nbsp;" + "&nbsp;" + item + "<br/>"
                    + "&nbsp;" + "}"
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
            <h2>Level 16:</h2>

            <div class="speech16" >
                The dog has hid his bone and you have to help him find it and you don't know the location of the bone. 
                Just like last time the bone class will help you find the bones location. We are introducing a for loop in this
                level and you must use it instead of a while loop. The varible steps will be a counter that will be passed into the for loop to determine 
                how many time you would like to iterate through your commands . 
                The count starts at 0 so becaeful of that! The row and col varibles will be used in the if statement, if statement must call the function "bone.found()" which will let the dog pick up the bone. 
                Use the same amount or less amount of commands mentioned in the top right corner. The paw prints are a hint on which direction the bone can be.
                <br />

                <p class="hints">There is a hint button below that can get you started on if you are stuck.
                    Click on the information buttons in the Bone class to learn about what is happening in the class and to learn about the private and public modifiers.
                    <br /> Good luck! <br /> (To learn more about for, understand the for loop condition, how variables work and about if statments click the i's below)</p>
            </div>
            <div class="borderPanel">

                <div class="toppart16">
                    <div class="containing">
                        <p id="count" class="number">0/3</p>

                    </div>
                    <button class="seemingly-inner-button-hint" onClick={hint} disabled={pressed === true}>
                        Hint
                    </button>
                    <p class="titles">Enter Sequence:</p>

                    <div class='buttons-wrapper12'>
                        <button class="seemingly-inner-button12" onClick={varInformation} disabled={pressed === true}>
                            <i class="fa fa-info" ></i>   &nbsp;Variables
                        </button>
                        <p class="subtitles">Variable Declaration</p>
                    </div>
                    <div>
                        <p class="bones">Bone bone = new Bone()</p>
                    </div>
                    <form class="var">
                        int row =  <input id="var1" class="input" size="5" onChange={e => setVal1(parseInt(e.target.value))}></input>   ; <br />
                        <br />
                        int col = <input id="var2" class="input" size="5" onChange={e => setVal2(parseInt(e.target.value))}></input>  ;  <br />
                        <br />
                        &nbsp; int steps =  <input id="var3" class="input" size="5" onChange={e => setVal3(parseInt(e.target.value))}></input>  ;
                        <br /><br />
                    </form>
                    <p id="action" class="lists"></p>

                </div>

            </div>

            <div class="outside13">
                <button type='submit' class="button" onClick={addLeft} disabled={pressed === true} >Left</button>
                <button type='submit' class="button" onClick={addUp} disabled={pressed === true} >Up</button>
                <button type='submit' class="button" onClick={addDown} disabled={pressed === true} >Down</button>
                <button type='submit' class="button" onClick={addRight} disabled={pressed === true} >Right</button>
                <div class="buttons-wrapper5">
                    <button class="seemingly-inner-button" onClick={whileInformation} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button type='submit' class="button" onClick={addFor} disabled={pressed === true}>For</button>
                </div>
                <div class="buttons-wrapper5">
                    <button class="seemingly-inner-button" onClick={ifInformation} disabled={pressed === true}>
                        <i class="fa fa-info" ></i>
                    </button>
                    <button type='submit' class="button" onClick={addIf} disabled={pressed === true}>If Statement</button>
                </div>
                <button type='submit' class="button" onClick={boneFound}>bone.found()</button>

                <button type='submit' class="button" onClick={clearAll} disabled={pressed === true}>Clear</button>
                <button type='submit' class="button" onClick={forAction} disabled={pressed === true} > Submit</button>
            </div>


        </div>
    );
}

export default Level16Controls;
