import React from "react"
import "../../Style/Board.css"
import Panel from "../L17-Panel/L17-Panel"
import Class16 from "../L17-Panel/class17"

const state = {
    board: Array(25).fill(null),
    player: null
}

function Level17Board() {
    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}

                </div>
        )
    }


    state.board[20] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[15] = <img class="paw" src="assets/pawright.png" alt="d" id="paw"></img>;
    state.board[12] = <img class="paw" src="assets/pawright.png" alt="d" id="paw2"></img>;
    state.board[8] = <img class="goal" src="assets/bone.png" alt="d" id="food"></img>;

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



export default Level17Board
