import React from "react"
import "../../Style/Board.css"
import Panel from "../L3-Panel/Panel-3"

const state = {
    board: Array(25).fill(null),
    player: null
}

const Level3Board = () => {                                                                                                                                                                                                                                                                                                   

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

    state.board[1] = <img class="cat" src="assets/cat.png" alt="c" id="cat"></img>


    state.board[24] = <img class="dog" src="assets/dog.png" alt="d" id="dogTwo"></img>

    state.board[20] = <img class="food" src="assets/food.png" alt="f" id="foodTwo"></img>

    state.board[22] = <img class="cat" src="assets/cat.png" alt="h" id="catTwo"></img>

    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board3" >
                    {renderBoxes()}
                </div>
            </div>


            <div className="bottom-panel">
                <Panel/>
            </div>

        </div>
    )
}

export default Level3Board;
