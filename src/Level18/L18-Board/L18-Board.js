import React from "react"
import "../../Style/Board.css"
import Panel from "../L18-Panel/L18-Panel"
import Class16 from "../L18-Panel/class18"

const state = {
    board: Array(25).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, paws, food and paw object on it.
 * 
 * @returns a grid board
 */
function Level18Board() {
    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}

                </div>
        )
    }


    state.board[24] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[6] = <img class="goal" src="assets/bone.png" alt="d" id="food"></img>;

    state.board[2] = <img class="goal" src="assets/cat.png" alt="d" id="cat"></img>;

    return (
        <div className="container" >
            <div className="boardcontainer13">
                <div class="speech18" >
                    Help the dog get to his bone! Use the for loop again the variable steps will be a counter that will be passed into the for loop to determine
                    how many time you would like to iterate through your commands. The count starts at 0 so be careful of that! The boolean need to check if the moving cat is
                    present or not, the boolean will be used in the if statement which will get rid of the cat by barking. Use the same amount or less amount of commands mentioned in the top right corner.
                    <br />
                    Click on the information buttons to learn more about for, understand the for loop condition, how variables work and about if statments
                        <br /> Good luck! <br />
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



export default Level18Board
