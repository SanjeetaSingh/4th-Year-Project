import React from "react"
import "./Board.css"
import BottomPanel from "../Panel/BottomPanel"
import TopPanel from "../Panel/TopPanel"
import Tile from "../Tile/Tiles"
import Objects from "../objects"
// import dog from './assets/dog.png'
const col = ["1", "2", "3", "4", "5"];
const row = ["1", "2", "3", "4", "5"];

const p = [Objects];

    p.push({ image: "assets/dog.png", x: 2, y: 2 });


const Board = () => {

    let board = [];

    for (let i = col.length - 1; i >= 0; i--) {
        for (let j = 0; j < row.length; j++) {
            const num = j + i + 2
            let image = undefined;

            p.forEach((el) => {
                if (el.x === j && el.y === i) {
                    image = el.image;
                }
            });

            console.log(image)
            board.push(<Tile image={image} num={num} />);
        }
    }

    return (
        <div className="container">
            <div className="boardcontainer">
                <div className="board"> {board}</div>

            </div>
            <div className="top-panel">
                <TopPanel />
                <div>
                    <BottomPanel />
                </div>
            </div>

        </div>
    )
}

export default Board;
