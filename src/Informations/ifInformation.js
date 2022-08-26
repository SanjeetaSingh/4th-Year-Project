import React from 'react'
import Popup from 'react-popup';


 /**
 * The information tab for the the user learn 
 * more about if statements definiton and syntax
*/
const ifInformation = () => {
    const left = "{"
    const right = "}"


    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'If statement Information',
                content: <p>
                    The Java if statement is the most simple decision-making statement. It is used to
                    decide whether a certain statement or block of statements will be executed or not. <br /><br />
                    <b>i.e </b> If a certain condition is true then a block of statement is executed otherwise not. <br /><br />
                    In the case of this level we are checking if the cat is present at all the make the dog bark<br />
                    <br />
                    <b>Syntax:</b>  <br />
                    &nbsp; if (condtion)  {left}  <br />
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

export default ifInformation;
