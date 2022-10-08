import React from "react"
import "../../Style/Board.css"
import Panel from "../L12-Panel/L12-Panel"
import "../../Style/Control.css"

const state = {
    board: Array(9).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog and food object on it.
 * 
 * @returns a grid board
 */
const Level12Board = () => {

    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 3)} data-col={index % 3}>
                    {box}

                </div>
        )
    }


    state.board[7] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>

    state.board[1] = <img class="bone" src="assets/food.png" alt="f" id="food"></img>


    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div class="speech12" >
                    This level introduces variables! For the values of the varibles you need to set coordinates for the row and column of the bowl
                    to help the dog get to the food. These varibales will be used in the while loop as a condtion to stop looping through the commands.
                    You have to use the same amount or less amount of commands mentioned in the top right corner.
                    <br /> Good luck! <br /> (To learn more about while and to understand the while loop condition and the how variables work click the i below)
                </div>

                <div class="numbers">
                    &nbsp;&nbsp;&nbsp;&nbsp; col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    2 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                </div>

                <div class="wrap" >
                    <div className="rowt">
                        row
                    </div>
                    <div className="rows">
                        <br />
                        0 <br /><br /><br /><br />
                        1 <br /><br /><br /><br />
                        2 <br />
                    </div>
                    <div className="board11">
                        {renderBoxes()}
                    </div>


                </div>

            </div>
            <div className="bottom-panel">
                <Panel />
            </div>

        </div>
    )
}

export default Level12Board;
