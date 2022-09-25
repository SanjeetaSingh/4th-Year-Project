import React, { useState, useEffect } from "react"
import "../../Style/Board.css"
import Panel from "../L15-Panel/L15-Panel"
import Class15 from "../L15-Panel/class"

const state = {
    board: Array(9).fill(null),
    player: null
}

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
            <div className="boardcontainer2">
                <div className="board13" >
                    {renderBoxes()}
                </div>
                <Class15 />
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>
        </div>
    )
}



export default Level15Board