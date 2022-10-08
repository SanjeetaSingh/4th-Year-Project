import React, { useState, useEffect } from "react"
import "../../Style/Board.css"
import Panel from "../L15-Panel/L15-Panel"
import "../../Style/Control.css"

const state = {
    board: Array(9).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, paws and food object on it.
 * 
 * @returns a grid board
 */
function Level15Board() {
    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 3)} data-col={index % 3}>
                    {box}

                </div>
        )
    }


    state.board[8] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[4] = <img class="paw" src="assets/paw.png" alt="d" id="paw"></img>;
    state.board[0] = <img class="goal" src="assets/bone.png" alt="d" id="food"></img>;

    return (
        <div className="container" >
            <div className="boardcontainer13">
                <div class="speech13" >
                    It gets a little tricky here, the dog has hid his bone and you have to help him find it. The problem is that you don't know the row or column the
                    bone is at. There is a predefined Bone class that is made for you and you need to call on two getter methods that are made for you "getRow()" and "getCol()".
                    The variables will be used in the while loop as a condtion to stop looping through the commands. Use the same amount or less amount of commands mentioned in the top right corner.
                    The paw prints are a hint on which direction the bone can be.
                    <br />
                    There is a hint button below that can get you started on if you are stuck.
                    <p>Good luck! <br /> (To learn more about while, understand the while loop condition and how variables work click the i's below)</p>
                </div>
                <div className="board13" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>
        </div>
    )
}



export default Level15Board
