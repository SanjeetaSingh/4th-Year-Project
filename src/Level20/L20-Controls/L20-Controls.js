import React, { useState, useEffect } from 'react'
import Popup from 'react-popup';
import "../../Style/Control.css"
import varInformation from '../../Informations/varinformationindexrem';
import arraylistInformation from '../../Informations/arraylistInformationremove';


const Level20Controls = () => {

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

    // Tor store input values
    let [val3, setVal3] = useState(0)

    let reachedGoal = false



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
     * Method checks if the dog object is at the 
     * end postion and if the user has completed
     * the level successfully
     */
    function statement() {
        if (val3 === 3) {
            if (count <= 1) {
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
                                    window.location.replace("/level21")
                                    Popup.clearQueue();
                                    Popup.close()
                                }
                            }]
                        }
                    }, true)}
                </div>
            }
        } else if (val3 !== 3) {
            <div>
                {Popup.clearQueue()}
                {Popup.create({
                    title: 'Failed',
                    content: 'Oops it seems like you have entered an inncorect value for the index variable! Remember that the index count startes from 0. Try Again!',
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


    /**
       * Adds a string represents
       * the remove() method and 
       * shows the string on the panel which 
       * does actions accordingly.
       */
    function addBall() {
        let up = "if"

        moves.push(up)

        value = "list.remove(index)"

        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            if (list.length <= 1) {
                document.getElementById("action").innerHTML += "&emsp; &emsp;" + item + "<br/>"
            }
            count += 1
            commands.push(count)

            if (count <= 1) {
                for (const element of commands) {
                    total = element
                    document.getElementById("count").innerHTML = total + "/1"
                }
            }
        }

    }


    //Hides the bone from the view of the user
    useEffect(() => {
        let bone = document.getElementById('foodTop')
        if (bone !== null) {
            bone.style.visibility = 'visible'
        }
    })


    /**
     * Method displays the food in the 
     * array when sequence is done and is
     * correct.
     */
    const addingFood = async () => {
        let bone = document.getElementById('foodTop')
        if (val3 === 3) {
            reachedGoal = true
            if (bone !== null) {
                bone.style.visibility = 'hidden'
            }
        }
        if (reachedGoal) {
            await delay(1000)
            statement()
        } else {
            statement()
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
        document.getElementById("count").innerHTML = "/1"
    }

    let obj = "<Object>"
    let ending = "<>"

    return (
        <div class="level13Contain">
            <h2>Level 20:</h2>


            <div class="borderPanel">

                <div class="toppart16">
                    <div class="containing">
                        <p data-testid="counter" id="count" class="number">0/1</p>

                    </div>
                    <p class="titles">Enter Sequence:</p>

                    <div class='buttons-wrapper12'>
                        <button class="seemingly-inner-button12" onClick={varInformation} disabled={pressed === true}>
                            <i class="fa fa-info" ></i>   &nbsp;Variables
                        </button>
                        <p class="subtitles">Variable Declaration</p>
                    </div>

                    <div class='buttons-wrapperarray'>
                        <button class="seemingly-inner-buttonarr" onClick={arraylistInformation} disabled={pressed === true}>
                            <i class="fa fa-info" ></i>   &nbsp;ArrayLists
                        </button>
                        <p> ArrayList{obj} list = new ArrayList {ending} ();<br /></p>
                    </div>

                    <form class="var">
                        Bone bone = new Bone()<br /><br />
                        int index =  <input id="var3" class="input" size="5" onChange={e => setVal3(parseInt(e.target.value))}></input>  ;
                        <br /><br />
                    </form>
                    <p id="action" class="lists"></p>

                </div>

            </div>

            <div class="outside20">
                <button type='submit' class="button" onClick={addBall} disabled={pressed === true}>Remove Ball</button>

                <button type='submit' class="buttonClear" onClick={clearAll} disabled={pressed === true}>Clear</button>
                <button type='submit' class="buttonSub" onClick={addingFood} disabled={pressed === true} > Submit</button>
            </div>


        </div>
    );
}

export default Level20Controls;
