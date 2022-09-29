/**
 * Class checks if the dog object is at the 
 * one the paw prints and animates it accordingly 
 * so the dog image doesn't go off the board.
 */
 const pawCheck = async () => {

    function delay(time) {
        return new Promise(res => setTimeout(res, time));
    }
    let dog = document.getElementById('dog');
    let paws = document.getElementById('paw')


    if (dog != null || paws != null) {
        const box = dog.parentElement;
        let pawbox = paws.parentElement;

        const row = parseInt(box.getAttribute('data-row'))
        const col = parseInt(box.getAttribute('data-col'))



        const pawRow = parseInt(pawbox.getAttribute('data-row'))
        const pawCol = parseInt(pawbox.getAttribute('data-col'))


        if (row === pawRow && col === pawCol) {
            // document.getElementById('paw').src = "assets/dog.png"
            let paw = document.getElementById('paw')
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