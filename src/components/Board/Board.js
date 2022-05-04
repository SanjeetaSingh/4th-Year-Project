import React from "react"
import "./Board.css"
import BottomPanel from "../Panel/BottomPanel"
import TopPanel from "../Panel/TopPanel"
import Controls from "../Controls/Controls"

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

    state.board[12] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>

    return (
        <div className="container" >
            <div className="boardcontainer">
                <div className="board" >
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
