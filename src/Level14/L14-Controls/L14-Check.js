/**
 * Method checks if the dog object is at the 
 * end postion and if the user has completed
 * the level successfully
 */

const L14Check = async () => {

    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }
    let dog = document.getElementById('dog');
    let foodBowl1 = document.getElementById('food')


    if (dog != null || foodBowl1 != null) {
        const box = dog.parentElement;
        let foodbox = foodBowl1.parentElement;

        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col'))



        const bowlRow1 = parseInt(foodbox.getAttribute('data-row'))
        const bowlCol1 = parseInt(foodbox.getAttribute('data-col'))


        if (row === bowlRow1 && col === bowlCol1) {
            document.getElementById('food').src = "assets/dog.png"
            let change = document.getElementById('food')
            await delay(800)
            change.style.visibility = 'hidden'

        }
    }

}

export default L14Check;