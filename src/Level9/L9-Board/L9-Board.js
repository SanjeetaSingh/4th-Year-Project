import React from "react"
import "../../Style/Board.css"
import Panel from "../L9-Panel/L9-Panel"

const state = {
    board: Array(12).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, cat, hole and food object on it.
 * 
 * @returns a grid board
 */
const Level9Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 4)} data-col={index % 4}>
                    {box}
                </div>

        )
    }

    state.board[8] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>


    state.board[3] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    state.board[0] = <img class="cat" src="assets/cat.png" alt="f" id="cat"></img>


    state.board[9] = <img class="hole" src="assets/hole.png" alt="h" id="hole"></img>

    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board8" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level9Board;
