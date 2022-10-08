import React from 'react'
import Popup from 'react-popup';

 /**
 * The information tab for the the user learn 
 * more about while loops definiton and syntax
 * with a or condition as well.
*/
const whileInformation = () => {
    const left = "{"
    const right = "}"


    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'While statement Information',
                content: <p>
                    In Java a while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition.
                    The while loop can be thought of as a repeating if statement and a while loop in Java comes into use when we need to
                    repeatedly execute a block of statements.
                    <br /><br />
                    <b>i.e </b>  In the case of this level we are checking while the dog has not picked up the food then repeate the commands withing the block <br />
                    We can also see  in this level the while loop has the symbol "||" this is to check if the either conditions are being meet and stands for "or", so we are
                    checking if the dog has not reached food bowl 1 or food bowl 2. 
                    <br />
                    <br/>
                    <b>Syntax:</b>  <br />
                    &nbsp; while (condtion)  {left}  <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right}
                </p>,
                buttons: {
                    right: [{
                        text: 'Okay',
                        action: function () {
                            Popup.clearQueue();
                            Popup.close()
                        }
                    }]
                }
            }, true)}

        </div>
    );
}

export default whileInformation;
