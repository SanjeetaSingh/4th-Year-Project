/**
 * Method checks if the dog object is at the 
 * end postion and if the user has completed
 * the level successfully
 */

 const pawCheck = async () => {

    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }
    let dog = document.getElementById('dog');
    let paws = document.getElementById('paw')
    let paws2 = document.getElementById('paw2')


    if (dog != null || paws != null || paws != null) {
        const box = dog.parentElement;
        let pawbox = paws.parentElement;
        let pawsbox2 = paws2.parentElement;

        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col'))

        const pawRow = parseInt(pawbox.getAttribute('data-row'))
        const pawCol = parseInt(pawbox.getAttribute('data-col'))

        const pawRow2 = parseInt(pawsbox2.getAttribute('data-row'))
        const pawCol2 = parseInt(pawsbox2.getAttribute('data-col'))

        if (row === pawRow && col === pawCol) {
            let paw = document.getElementById('paw')
            let dog = document.getElementById('dog')

            paw.style.visibility = 'hidden'
            dog.style.visibility = 'visible'
            paw.style.visibility = 'visible'
            dog.style.visibility = 'hidden'
    
            await delay(900)
            dog.style.visibility = 'visible'
        }
        if (row === pawRow2 && col === pawCol2) {
            let paw = document.getElementById('paw2')
            let dog = document.getElementById('dog')

            paw.style.visibility = 'hidden'
            dog.style.visibility = 'visible'
            paw.style.visibility = 'visible'
            dog.style.visibility = 'hidden'
    
            await delay(900)
            dog.style.visibility = 'visible'
        }
    }

}

export default pawCheck;