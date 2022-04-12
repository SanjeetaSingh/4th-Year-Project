import React from "react"
import "./Board.css"
import BottomPanel from "../Panel/BottomPanel"
import TopPanel from "../Panel/TopPanel"

const Board = () => {

    return (
        <div class="container">
            <div class="boardcontainer">
                <div id="board">
                    <table>
                        <tr id="row1">
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                        </tr>
                        <tr id="row2">
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                        </tr>
                        <tr id="row3">
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                        </tr>
                        <tr id="row4">
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                        </tr>
                        <tr id="row5">
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                        </tr>
                        <tr id="row6">
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                            <td class="square h"></td>
                            <td class="square v h"></td>
                        </tr>
                    </table>

                </div>


            </div>
            <div class="top-panel">
                <TopPanel />
                <div>
                    <BottomPanel />
                </div>
            </div>

        </div>
    )
}

export default Board;