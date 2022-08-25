import React from "react"
import "../../Level2/L2-Board/Level-2-Board.css"
import Panel from "../L5-Panel/L5-Panel"

const state = {
    board: Array(25).fill(null),
    player: null
}

const Level5Board = () => {                                                                                                                                                                                                                                                                                                   

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}
                </div>
        )
    }

    state.board[24] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[6] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    
    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board5" >
                    {renderBoxes()}
                </div>
            </div>


            <div className="bottom-panel">
                <Panel/>
            </div>

        </div>
    )
}

export default Level5Board;
