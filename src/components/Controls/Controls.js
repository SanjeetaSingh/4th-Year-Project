import React from 'react'
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
        value = "moveLeft()"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item
    }

    function moveRight() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        value = "moveRight()"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item

    }

    function moveUp() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        value = "moveUp()"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item

    }

    function moveDown() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);

        value = "moveDown()"
        list.push(value)

        //Getting the last element of the list
        const lastVal = Object.keys(list).pop()
        const item = list[lastVal]


        document.getElementById("action").innerHTML += item

    }


    return (
        <div>
            <div class="borders">
                <div class="instuct">
                    <p class="title">Instructions:</p>
                    <p id="action" class="lists"></p>
                </div>
            </div>

            <button class="button" onClick={moveLeft}>Left</button>
            <button class="button" onClick={moveRight}>Right</button>
            <button class="button" onClick={moveUp}>Up</button>
            <button class="button" onClick={moveDown}>Down</button>
            <button class="submit" id="sub" >Submit</button>

        </div>
    );
}

export default Controls;
