import "../../Style/Board.css"
import Panel from "../L10-Panel/L10-Panel"

const state = {
    board: Array(16).fill(null),
    player: null
}

const Level10Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 4)} data-col={index % 4}>
                    {box}
                </div>

        )
    }

    state.board[12] = <img class="dog" src="assets/dog.png" alt="d" id="dog"></img>


    state.board[3] = <img class="food" src="assets/food.png" alt="f" id="food"></img>

    state.board[1] = <img class="cat" src="assets/cat.png" alt="f" id="catOne"></img>
    state.board[14] = <img class="cat" src="assets/cat.png" alt="f" id="catTwo"></img>


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
