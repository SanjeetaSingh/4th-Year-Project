import React from "react"
import "./Board.css"
import BottomPanel from "../Panel/BottomPanel"
import TopPanel from "../Panel/TopPanel"


const state = {
    board: Array(25).fill(null),
    player: null
}

const Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}
                </div>
        )
    }

    function moveLeft() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) - 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);
    }

    function moveRight() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col')) + 1;
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);
    }

    function moveUp() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) - 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);
    }

    function moveDown() {
        var element = document.getElementById('dog');
        const box = element.parentElement;
        const row = parseInt(box.getAttribute('data-row')) + 1
        const col = parseInt(box.getAttribute('data-col'));
        const newBox = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        newBox.append(element);
    }

    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
                moveLeft();
                break;
            case 39:
                moveRight();
                break;
            case 38:
                moveUp();
                break;
            case 40:
                moveDown();
                break;
            default:
        }
    };

    function docReady() {
        window.addEventListener('keydown', moveSelection);
    }

    state.board[12] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>

    return (
        <div className="container" >
            <div className="boardcontainer">
                <div className="board" onLoad={docReady} >
                    {renderBoxes()}

                </div>
            </div>

            <div className="top-panel">
                <TopPanel />
                <div className="bottom-panel">
                    <BottomPanel />
                </div>
            </div>


        </div>
    )
}

export default Board;
