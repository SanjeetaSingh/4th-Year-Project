import React from "react"
import "../../Style/Board.css"
import Panel from "../L19-Panel/L19-Panel"
import Popup from 'react-popup';


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



    function instructions() {
        <div>
            {Popup.clearQueue()}
            {
                Popup.create({
                    title: 'Instructions',
                    content: <p> This level introduces the collection ArrayList's and the top row of the board is a visual reprsentation of an arraylist with index 0 - 4.
                        This arraylist is declared at the start of the code, click the information button to learn more about how the ArrayList collection works.
                        The dog wants to keep his bone away from his owners stored in the arraylist. You have to help the dog add his bone to the
                        arraylist! When the bone is successfully added it will show in the first index of the board.
                        You have to use the for loop to get the dog to the bone and check if the dog is at the bone. Once at the bone add the bone to the arraylist.
                        
                        <br/>
                        Click on the information buttons to learn more about for loops, understand the for loop condition, how variables work and about if statements
                        <br /> Good luck!
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
            <div className="boardcontainer14">
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



export default Level19Board
