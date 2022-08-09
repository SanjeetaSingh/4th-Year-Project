import React from "react"
import "../../Level2/L2-Board/Level-2-Board.css"
import Panel from "../L4-Panel/L4-Panel"

const state = {
    board: Array(15).fill(null),
    player: null
}

const Level4Board = () => {                                                                                                                                                                                                                                                                                                   

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}
                </div>
        )
    }

    state.board[4] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[0] = <img class="food" src="assets/food.png" alt="f" id="foodOne"></img>

    state.board[5] = <img class="hole" src="assets/hole.png" alt="h" id="holeOne"></img>

    state.board[3] = <img class="hole" src="assets/hole.png" alt="h" id="holeTwo"></img>
    
    state.board[1] = <img class="cat" src="assets/cat.png" alt="c" id="cat"></img>

    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board4" >
                    {renderBoxes()}
                </div>
            </div>


            <div className="bottom-panel">
                <Panel/>
            </div>

        </div>
    )
}

export default Level4Board;
