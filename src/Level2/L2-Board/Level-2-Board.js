import React from "react"
import "../../Style/Board.css"
import Panel from "../L2-Panel/Level-2-Panel"

const state = {
    board: Array(16).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, cat and food object on it.
 * 
 * @returns a grid board
 */
const Level2Board = () => {                                                                                                                                                                                                                                                                                                   

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 4)} data-col={index % 4}>
                    {box}
                </div>
        )
    }

    state.board[3] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[0] = <img class="food" src="assets/food.png" alt="f" id="foodOne"></img>

    state.board[4] = <img class="hole" src="assets/hole.png" alt="h" id="holeOne"></img>

    state.board[1] = <img class="cat" src="assets/cat.png" alt="c" id="cat"></img>



    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board2" >
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
