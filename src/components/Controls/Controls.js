import React from 'react'
import "./Control.css"
const Controls = () => {

    //String that will show when button is clicked
    let value = ""

    //List of strings
    let list = []

    function moveLeft() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);
        value = "moveLeft();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item + "<br/>"

        statement()
    }

    function moveRight() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        value = "moveRight();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item + "<br/>"

        statement()

    }

    function moveUp() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        value = "moveUp();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item + "<br/>"

        statement()
    }

    function moveDown() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        value = "moveDown();"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item + "<br/>"

        statement()
    }


    function statement() {

        var dog = document.getElementById('dog');
        var foodel = document.getElementById('food');

        console.log('function called');
        if (dog != null || foodel != null) {
            const box = dog.parentElement;
            const foodbox = foodel.parentElement;

            const row = parseInt(box.getAttribute('data-row'))
            const col = parseInt(box.getAttribute('data-col'))
            // const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

            const foodrow = parseInt(foodbox.getAttribute('data-row'))
            const foodcol = parseInt(foodbox.getAttribute('data-col'))
            // const boxs = document.querySelector(`[data-row="${foodrow}"][data-col="${foodcol}"]`);


            if (row === foodrow && col === foodcol) {
                return alert("win");
            }
        }
        return //
    }
    

    return (
        <div>
            <div class="borderPanel">
                <div class="toppart">
                    <p class="title">Sequence:</p>
                    <p id="action" class="lists"></p>
                </div>


                <div class="bubble bubble-bottom-left" >
                    Hi there! Your aim for this level is to get the dog to the food with the command butttons below. Once you are done with creating your
                    sequence then go ahead and click the submit button
                </div>

            </div>

            <div class="outside">
                <button class="button" onClick={moveLeft}>Left</button>
                <button class="button" onClick={moveRight}>Right</button>
                <button class="button" onClick={moveUp}>Up</button>
                <button class="button" onClick={moveDown}>Down</button>
                <button class="button"> Submit</button>
            </div>


        </div>
    );
}

export default Controls;
