import "../../Style/Board.css"
import Panel from "../L10-Panel/L10-Panel"

const state = {
    board: Array(25).fill(null),
    player: null
}

const Level10Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}
                </div>

        )
    }

    state.board[10] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>


    state.board[13] = <img class="food" src="assets/food.png" alt="f" id="foodOne"></img>
    state.board[23] = <img class="food" src="assets/food.png" alt="f" id="foodTwo"></img>


    state.board[1] = <img class="cat" src="assets/cat.png" alt="f" id="catOne"></img>
    state.board[22] = <img class="cat" src="assets/cat.png" alt="f" id="catTwo"></img>


    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div className="board10" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level10Board;
