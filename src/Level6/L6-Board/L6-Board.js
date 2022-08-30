import React from "react"
import "../../Style/Board.css"
import Panel from "../L6-Panel/L6-Panel"

const state = {
    board: Array(12).fill(null),
    player: null
}

const Level6Board = () => {                                                                                                                                                                                                                                                                                                   

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 4)} data-col={index % 4}>
                    {box}
                </div>
        )
    }

    state.board[8] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[5] = <img class="hole" src="assets/hole.png" alt="f" id="holeTwo"></img>

    state.board[3] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    
    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board6" >
                    {renderBoxes()}
                </div>
            </div>


            <div className="bottom-panel">
                <Panel/>
            </div>

        </div>
    )
}

export default Level6Board;
