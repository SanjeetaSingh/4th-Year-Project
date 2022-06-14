import React from 'react'
import "./Control.css"
const Controls = () => {
    //String that will show when button is clicked
    let value = ""

    //List of strings
    let list = []

    // Stores all the moves to be done on submit
    let moves = []

    let pressed = false

    function submit() {

        let items = moves.values();

        pressed = true

        for (let i = 0; i < moves.length; i++) {
            for (let element of items) {
                if (element === "left") {
                    moveLeft()
                }
                if (element === "right") {
                    moveRight()
                }
                if (element === "down") {
                    moveDown()
                }
                if (element === "up") {
                    moveUp()
                }
            }
            console.log(i)
        }

        if (list.length > 10) {
            console.log("can u do better")
        }

    }

    function moveLeft() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        statement()
    }

    function moveRight() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        statement()

    }

    function moveUp() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        statement()
    }

    function moveDown() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        statement()
    }


    function statement() {

        var dog = document.getElementById('dog');
        var food = document.getElementById('food');

        if (dog != null || food != null) {
            const box = dog.parentElement;
            let foodbox = food.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))

            if (row === foodrow && col === foodcol) {
                document.getElementById('food').src = "assets/dog.png"
            }

        }
    }


    function addLeft() {
        let left = "left"

        moves.push(left)

        value = "moveLeft();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]
        if (pressed !== true) {
            document.getElementById("action").innerHTML += item + "<br/>"
        }
    }

    function addRight() {
        let right = "right"

        moves.push(right)

        value = "moveRight();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            document.getElementById("action").innerHTML += item + "<br/>"
        }
    }

    function addDown() {
        let down = "down"

        moves.push(down)
        value = "moveDown();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            document.getElementById("action").innerHTML += item + "<br/>"
        }
    }

    function addUp() {
        let up = "up"

        moves.push(up)

        value = "moveUp();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]

        if (pressed !== true) {
            document.getElementById("action").innerHTML += item + "<br/>"
        }
    }



    return (
        <div class="containers">
            <div class="borderPanel">
                <h2>Level 1:</h2>
                <div class="toppart">
                    <p class="titles">Sequence:</p>
                    <p id="action" class="lists"></p>
                </div>

                <div class="bubble bubble-bottom-left" >
                    Hi there! Your aim for this level is to get the dog to the food with the command butttons below. Once you are done with creating your
                    sequence then go ahead and click the submit button!
                </div>

            </div>

            <div class="outside">
                <button type='submit' class="button" onClick={addLeft} disabled={pressed === true} >Left</button>
                <button type='submit' class="button" onClick={addRight} disabled={pressed === true} >Right</button>
                <button type='submit' class="button" onClick={addUp} disabled={pressed === true} >Up</button>
                <button type='submit' class="button" onClick={addDown} disabled={pressed === true} >Down</button>
                <button type='submit' class="button" onClick={submit} disabled={pressed === true} > Submit</button>
            </div>


        </div>
    );
}

export default Controls;
