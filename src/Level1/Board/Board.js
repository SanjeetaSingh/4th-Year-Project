import React from "react"
import "../../Style/Board.css"
import BottomPanel from "../Panel/BottomPanel"

const state = {
    board: Array(49).fill(null),
    player: null
}

const Board = () => {                                                                                                                                                                                                                                                                                                   

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 7)} data-col={index % 7}>
                    {box}
                </div>
        )
    }

    state.board[40] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[0] = <img class="bone" src="assets/food.png" alt="f" id="food"></img>

    return (
        <div className="container" >
            <div className="boardcontainer">
                <div className="board" >
                    {renderBoxes()}
                </div>
            </div>


            <div className="bottom-panel">
                <BottomPanel />
            </div>

        </div>
    )
}

export default Board;
