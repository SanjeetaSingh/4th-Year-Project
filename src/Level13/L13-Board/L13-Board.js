import React from "react"
import "../../Style/Board.css"
import Panel from "../L13-Panel/L13-Panel"
import "../../Style/Control.css"

const state = {
    board: Array(9).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, hole and food object on it.
 * 
 * @returns a grid board
 */
const Level13Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 3)} data-col={index % 3}>
                    {box}
                </div>
        )
    }


    state.board[8] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[3] = <img class="bone" src="assets/food.png" alt="f" id="food"></img>

    state.board[7] = <img class="hole" src="assets/hole.png" alt="h" id="holeOne"></img>

    state.board[5] = <img class="hole" src="assets/hole.png" alt="h" id="holeTwo"></img>


    return (
        <div className="container" >
            <div className="boardcontainer13">
                <div class="speech13" >
                    Varibles again! For the values of the varibles you need to set coordinates for the row and column of the bowl
                    to help the dog get to the food again. These varibales will be used in the while loop as a condtion to stop looping through the commands.
                    You have to use the if statement to avoid falling in the holes. Use the same amount or less amount of commands mentioned in the top right corner.
                    <br /> Good luck! <br /> (To learn more about while, understand the while loop condition, how variables work and about if statements click the i below)
                </div>
                <div className="board13" >
                    {renderBoxes()}
                </div>
            </div>
            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level13Board;
