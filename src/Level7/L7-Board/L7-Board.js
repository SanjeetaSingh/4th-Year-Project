import React from "react"
import "../../Style/Board.css"
import Panel from "../L7-Panel/L7-Panel"

const state = {
    board: Array(9).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, cats and food object on it.
 * 
 * @returns a grid board
 */
const Level7Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 3)} data-col={index % 3}>
                    {box}
                </div>
        )
    }

    state.board[6] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[3] = <img class="cat" src="assets/cat.png" alt="f" id="catTwo"></img>

    state.board[2] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    state.board[1] = <img class="cat" src="assets/cat.png" alt="f" id="cat"></img>

    state.board[5] = <img class="cat" src="assets/cat.png" alt="f" id="catThree"></img>

    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board7" >
                    {renderBoxes()}
                </div>
            </div>


            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level7Board;
