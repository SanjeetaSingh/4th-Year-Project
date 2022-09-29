import React from "react"
import "../../Style/Board.css"
import Panel from "../L16-Panel/L16-Panel"
import Class16 from "../L16-Panel/class16"

const state = {
    board: Array(25).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, paws and food object on it.
 * 
 * @returns a grid board
 */
function Level16Board() {
    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}

                </div>
        )
    }


    state.board[23] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[17] = <img class="paw" src="assets/paw.png" alt="d" id="paw"></img>;
    state.board[11] = <img class="goal" src="assets/bone.png" alt="d" id="food"></img>;

    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board16" >
                    {renderBoxes()}
                </div>
                <Class16 />
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>
        </div>
    )
}



export default Level16Board
