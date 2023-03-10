import React from 'react'
import Popup from 'react-popup';

/**
* The information tab for the the user learn 
* more about for loops definiton and syntax
*/
const forInformation = () => {
    const left = "{"
    const right = "}"
    const ex = "for (int i = 0; i < 5; i++)"

    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'For Loop Information',
                content: <p>
                    A for loop is a repetition control structure that allows you to efficiently write a loop that needs to be executed a specific number of times.
                    <br /><br />
                    <b>i.e </b>  In the case of this level we are iterating through the number of time you input for the variable "steps". <br />
                    <br />
                    <b>Syntax:</b>  <br />
                    &nbsp; for (statement 1; statement 2; statement 3)   {left}  <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right}

                    <br />
                    <b>statement 1:</b> describes the starting point of the loop, where the loop variable is initialized with a starting value
                    <br />
                    <b>statement 2:</b>  is the condition until when the loop is repeated so the boolean checking when it is true or false. 
                    <br />
                    <b>statement 3:</b> usually the number by which the loop variable is incremented. so when it say "++" thats it incrementing the loop variable by 1.
                    statement 3 can also decrease it doesn't need to increament.
                    <br />
                    <br />
                    <b>Example:</b>
                    <br />
                    The example below will print the numbers 0 to 4 <br />
                    <p>&nbsp; {ex} {left} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);
                        <br />&nbsp;&nbsp;{right}</p>
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

export default forInformation;
