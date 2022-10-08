import React from "react"
import "../../Style/Board.css"
import Panel from "../L14-Panel/L14-Panel"
import "../../Style/Control.css"

const state = {
    board: Array(16).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, cats and food object on it.
 * 
 * @returns a grid board
 */
const Level14Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 4)} data-col={index % 4}>
                    {box}
                </div>
        )
    }


    state.board[5] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[15] = <img class="bone" src="assets/food.png" alt="f" id="food"></img>

    state.board[2] = <img class="cat" src="assets/cat.png" alt="f" id="catOne"></img>

    state.board[8] = <img class="cat" src="assets/cat.png" alt="f" id="catTwo"></img>


    return (
        <div className="container" >
            <div className="boardcontainer14">
            <div class="speech13" >
                Varibles again! The variable in this level is setting a boolean to either true or false. In the input field type either true or false and
                this boolean will be used in the if statement to check if the cat is present or not and when to bark. Use the same amount or less amount of commands mentioned in the top right corner.
                <br /> Good luck! <br /> (To learn more about while, understand the while loop condition, how variables work and about if statements click the i below)
            </div>
                <div className="board14" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level14Board;
