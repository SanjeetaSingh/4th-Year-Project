import React from 'react'

import Board from '../Level1/Board/Board';

/**
 * This takes the user to the home which 
 * is set to be the 1st level of the game.
 * 
 * @returns the home page also known as the 1st level
 */
const Home = () => {
    return (
        <div>
            <Board />
        </div>
    );
}

export default Home;
