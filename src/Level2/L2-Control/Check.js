import React from 'react'

/**
 * Method checks if the dog object is at the 
 * end postion and if the user has completed
 * the level successfully
 */

const Check = async () => {

    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }
    let dog = document.getElementById('dog');
    let dog2 = document.getElementById('dogTwo');
    let foodBowl1 = document.getElementById('foodOne')
    let foodBowl2 = document.getElementById('foodTwo')

    if (dog != null || foodBowl1 != null || foodBowl2 != null) {
        const box = dog.parentElement;
        const box1 = dog2.parentElement;
        let foodbox = foodBowl1.parentElement;
        let foodBox2 = foodBowl2.parentElement

        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col'))

        const row1 = parseInt(box1.getAttribute('data-row'))
        const col1 = parseInt(box1.getAttribute('data-col'))

        const bowlRow1 = parseInt(foodbox.getAttribute('data-row'))
        const bowlCol1 = parseInt(foodbox.getAttribute('data-col'))

        const bowlRow2 = parseInt(foodBox2.getAttribute('data-row'))
        const bowlCol2 = parseInt(foodBox2.getAttribute('data-col'))

        if (row === bowlRow1 && col === bowlCol1) {
            document.getElementById('foodOne').src = "assets/dog.png"
            let change = document.getElementById('foodOne')
            await delay(800)
            change.style.visibility = 'hidden'

        }
        if (row1 === bowlRow2 && col1 === bowlCol2) {
            document.getElementById('foodTwo').src = "assets/dog.png"
            let change = document.getElementById('foodTwo')
            await delay(800)
            change.style.visibility = 'hidden'
        }
    }

}

export default Check;