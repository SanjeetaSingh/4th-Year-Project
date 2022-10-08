import React from "react"
import "../../Style/Board.css"
import Panel from "../L20-Panel/L20-Panel"
import Popup from 'react-popup';


const state = {
    board: Array(15).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, paws, food and paw object on it.
 * 
 * @returns a grid board
 */
function Level20Board() {
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
    state.board[3] = <img class="goal" src="assets/bone.png" alt="d" id="foodTop"></img>;
    state.board[10] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[2] = <img class="ball" src="assets/ball.png" alt="d" id="ball2"></img>;


    function instructions() {
        <div>
            {Popup.clearQueue()}
            {
                Popup.create({
                    title: 'Instructions',
                    content: <p>   This level uses the collection arraylist again and the top row of the board is a visual reprsentation of an arraylist with index 0 - 4.  This arraylist is declared at the
                        start of the code, click the information button to learn more about how the arraylist collections works. The dog wants to remove his bone from the arraylist to play with!
                        For this level you have to help the dog remove his bone from the arraylist and when you have successfully removed the bone it will disapear from the arraylist. Don't get confused
                        by the balls and bowl of food at the top of the board, these items are a part of the arraylist. You don't need to move the dog, you will just need to enter the correct array index
                        in the input field which will remove the item at the specified index.
                        <br />

                        Click on the information buttons to learn how variables work and learn about arralylist collections.
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



export default Level20Board
