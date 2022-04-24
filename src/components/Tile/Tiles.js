import React from 'react'
import "./Tile.css"

export default function Tile({ image, num }) {
    if (num % 2 === 0) {
        return (
            <div class="tile black-tile">
                <img src={image}/>
            </div>
        );
    }
    else {
        return (
            <section class="tile white-tile">
                <img src={image}  />
            </section>
        );
    }
}
