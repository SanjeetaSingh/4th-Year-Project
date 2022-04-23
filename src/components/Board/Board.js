import React from "react"
import "./Board.css"
import BottomPanel from "../Panel/BottomPanel"
import TopPanel from "../Panel/TopPanel"
import tile from '../../assets/tile.jpg'

const Board = () => {

    const col = ["1", "2", "3", "4", "5"]
    const row = ["1", "2", "3", "4", "5"]

    let board = [];

    for (let i = col.length - 1; i >= 0; i--) {
        for (let j = 0; j < row.length; j++) {
            board.push(<div class="tiles">{<img src={tile} alt="tile" />}</div>)
        }
    }

    return (
        <div class="container">
            <div class="boardcontainer">
                <div class="board"> {board}</div>

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
