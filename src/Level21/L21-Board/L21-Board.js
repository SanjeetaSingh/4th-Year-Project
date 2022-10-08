import React from "react"
import "../../Style/Board.css"
import Panel from "../L21-Panel/L21-Panel"
import Popup from 'react-popup';


const state = {
    board: Array(20).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, paws, food and paw object on it.
 * 
 * @returns a grid board
 */
function Level21Board() {
    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}

                </div>
        )
    }


    state.board[0] = <img class="ball" src="assets/ball.png" alt="d" id="ball"></img>;
    state.board[1] = <img class="goal" src="assets/food.png" alt="d" id="foodTop1"></img>;
    state.board[2] = <img class="goal" src="assets/bone.png" alt="d" id="foodTop"></img>;
    state.board[10] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[14] = <img class="goal" src="assets/bone.png" alt="d" id="food"></img>;


    function instructions() {
        <div>
            {Popup.clearQueue()}
            {
                Popup.create({
                    title: 'Instructions',
                    content: <p>  This level uses the collection arraylist's again and the top row of the board represents an arraylist with an index of 0 - 4. This arraylist is declared at the start of the code.
                        Click the information button to learn more about how the arraylist collection works. The dog has stored some of his favourite things already in the array, he wants to add his favourite bone to the
                        collection as well! For this level you have to help the dog add his bone to the arraylist! When the bone has successfully been added to the list it will display at the top of the board.
                        Don't get confused by the 2 items shown at the top the ball and bowl of food are already in the list. You have to use the for loop to get the dog to the bone and check if the dog is at the bone. Once at the bone add the bone to the arraylist.
                        <br />
                        Click on the information buttons to learn more about for loops, understand the for loop condition, how variables work and about if statements
                        <br /> Good luck! <br />
                    </p>,
                    buttons: {
                        right: [{
                            text: 'Okay',
                            className: 'success',
                            action: function () {
                                window.location.reload(true)
                                Popup.clearQueue();
                                Popup.close()
                            }
                        }]
                    }
                }, true)
            }
        </div>
    }



    return (
        <div className="container" >
            <div className="boardcontainer2">
                <div class="in">
                    <button type="submit" class="buttonIn" onClick={instructions}>Instructions</button>
                </div>
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



export default Level21Board
