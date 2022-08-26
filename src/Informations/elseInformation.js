import React from 'react'
import Popup from 'react-popup';

/**
 *  The if else statement information tabe that will help 
 * the user learn more about the definiton and syntax
 */
const elseInformation = () => {
    const left = "{"
    const right = "}"

    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Else statement Information',
                content: <p>
                    The Java else block is used to specify a new condition to test if the first condition is false. <br /><br />
                    <b>i.e </b> If a previour condition is not true then an alternative statement is executed. <br /><br />
                    In the case of this level we are checking if the cat is present then back else if there is a hole present then make the dog jump. <br />
                    <br />
                    <b>Syntax for else:</b>  <br />
                    &nbsp; if (condtion)  {left}  <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} else {left} <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} <br /><br />

                    <b>Syntax for else if:</b>  <br />
                    &nbsp; if (condtion)  {left}  <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} else if (condition) {left} <br />
                    <p class="statecolour"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other block of statement</p>
                    &nbsp;&nbsp;&nbsp;{right} <br /><br />
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

export default elseInformation;
