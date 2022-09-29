import React from "react"
import "../../Style/Board.css"
import Panel from "../Panel/L11-Panel"

const state = {
    board: Array(9).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, cats and food object on it.
 * 
 * @returns a grid board
 */
const Level11Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 3)} data-col={index % 3}>
                    {box}
                </div>
        )
    }

    state.board[0] = <img class="image" src="assets/cat.png" alt="d" id="cat"></img>

    state.board[6] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[2] = <img class="bone" src="assets/food.png" alt="f" id="food"></img>

    state.board[3] = <img class="bone" src="assets/food.png" alt="f" id="foodTwo"></img>

    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board11" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level11Board;
