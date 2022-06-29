import React from "react"
import "./Level-2-Board.css"
import Panel from "../L2-Panel/Level-2-Panel"

const state = {
    board: Array(49).fill(null),
    player: null
}

const Level2Board = () => {                                                                                                                                                                                                                                                                                                   

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 7)} data-col={index % 7}>
                    {box}
                </div>
        )
    }

    state.board[40] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[0] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    state.board[7] = <img class="hole" src="assets/hole.png" alt="h" id="holeOne"></img>

    state.board[38] = <img class="hole" src="assets/hole.png" alt="h" id="holeTwo"></img>

    state.board[13] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    state.board[17] = <img class="cat" src="assets/cat.png" alt="c" id="cat"></img>



    return (
        <div className="container" >
            <div className="boardcontainer">
                <div className="board" >
                    {renderBoxes()}
                </div>
            </div>


            <div className="bottom-panel">
                <Panel/>
            </div>

        </div>
    )
}

export default Level2Board;
