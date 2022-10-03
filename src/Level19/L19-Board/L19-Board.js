import React from "react"
import "../../Style/Board.css"
import Panel from "../L19-Panel/L19-Panel"
import Class16 from "../L19-Panel/class19"

const state = {
    board: Array(25).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, paws, food and paw object on it.
 * 
 * @returns a grid board
 */
function Level19Board() {
    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}

                </div>
        )
    }


    state.board[0] = <img class="goal" src="assets/bone.png" alt="d" id="foodTop"></img>;
    state.board[22] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[14] = <img class="goal" src="assets/bone.png" alt="d" id="food"></img>;



    return (
        <div className="container" >
            <div className="boardcontainer2">

                <div class="numbers">
                    ArrayList &nbsp;&nbsp;&nbsp;&nbsp;
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; [ 0 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    2 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    4 ] &nbsp;&nbsp;
                </div>
                <div className="board16" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>
        </div>
    )
}



export default Level19Board