import React, { useEffect, useState, useCallback } from "react"
import "../../Style/Board.css"
import Panel from "../L9-Panel/L9-Panel"

const state = {
    board: Array(12).fill(null),
    player: null
}

const Level9Board = () => {

    // Stores all the moves to be done on submit
    let autoMoves = []

    // Checking if the submit button is pressed
    let pressed = false
    /**
    * The delay to get the dog walking a tile at a time
    * 
    * @param {*} time - the duration 
    * @returns a promise
    */
    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }

    const [cats, setCats] = useState("")

    autoMoves = ["rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat",
    "rightCat", "downCat", "rightCat", "leftCat", "upCat", "leftCat"]

    /**
     * Submits the sequence that the user
     * has entered for the dog object to move.
     * The dog object will move after submit is pressed
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


    useEffect(() => {
        submitCat();
    }, [], cats)

    /**
     * Moves the dog object one tile to the left
     */
    function moveCatLeft() {
        let element = document.getElementById('cat');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (newBox !== null || element !== null) {
            newBox.append(element);

        }
    }

    /**
     * Move the dog object one tile to the right
     */
    function moveCatRight() {
        let element = document.getElementById('cat');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }


    /**
     * Moves the dog object one tile up
     */
    function moveCatUp() {
        let element = document.getElementById('cat');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);


        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }

    /**
     * Moves the dog object one tile down
     */
    function moveCatDown() {
        let element = document.getElementById('cat');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (newBox !== null || element !== null) {
            newBox.append(element);

        }

    }

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 4)} data-col={index % 4}>
                    {box}
                </div>

        )
    }

    state.board[8] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>


    state.board[3] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    state.board[0] = <img class="cat" src="assets/cat.png" alt="f" id="cat"></img>


    state.board[9] = <img class="hole" src="assets/hole.png" alt="h" id="hole"></img>

    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board8" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level9Board;
