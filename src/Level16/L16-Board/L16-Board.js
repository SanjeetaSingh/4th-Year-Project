import React from "react"
import "../../Style/Board.css"
import Panel from "../L16-Panel/L16-Panel"
import Class16 from "../L16-Panel/class16"
import Popup from 'react-popup';


const state = {
    board: Array(25).fill(null),
}

/**
 * Class constucts the grid board with 
 * the dog, paws and food object on it.
 * 
 * @returns a grid board
 */
function Level16Board() {
    const renderBoxes = () => {
        return state.board.map(
            (box, index) =>
                <div className="box" data-row={parseInt(index / 5)} data-col={index % 5}>
                    {box}

                </div>
        )
    }

    function instructions() {
        <div>
            {Popup.clearQueue()}
            {
                Popup.create({
                    title: 'Instructions',
                    content: <p>Help the dog find his bone but you dont know the location of the bone. Bone class can be seen this time so you are able to see how the getter methods work, like last time call on two getter methods that are made for you "getRow()" and "getCol()" to access the row and col. 
                        Click the Bone Class button to view the class. We are introducing a for loop in this level where the variable steps will be used as a counter that will be passed into the for loop to determine
                        how many time to iterate through the commands. The count starts at 0 so be careful of that! The row and col varibles will be used in the if statement, if statement must call the function "bone.found()" which will let the dog pick up the bone
                        if the iteration of steps is correct. Use the same amount or less amount of commands mentioned in the top right corner. The paw prints are a hint on which direction the bone can be.
                        There is a hint button on the top corner of the brown panel that can get you started on if you are stuck. Click on the information buttons in the Bone class to learn about what is happening in the class and to learn about the private and public modifiers.
                        < br /> Good luck! <br /> (To learn more about for, understand the for loop condition, how variables work and about if statments click the i's below)
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


    state.board[23] = <img class="image" src="assets/dog.png" alt="d" id="dog"></img>;
    state.board[17] = <img class="paw" src="assets/paw.png" alt="d" id="paw"></img>;
    state.board[11] = <img class="goal" src="assets/bone.png" alt="d" id="food"></img>;

    return (
        <div className="container" >
            <div className="boardcontainer14">
                <div class="in"> 
                    <button type="submit" class="buttonIn" onClick={instructions}>Instructions</button>
                    <button type ="submit" class="buttonBone" onClick={Class16}>Bone Class</button>
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



export default Level16Board
