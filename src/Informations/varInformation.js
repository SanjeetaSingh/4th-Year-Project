import React from 'react'
import Popup from 'react-popup';
import '../Style/Information.css'


/**
* The information tab for the the user learn 
* more about variables definiton 
*/
const varInformation = () => {


    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Variables Information',
                content: <p>
                    Variable in Java is a data container that saves the data values during Java program execution.
                    Every variable is assigned a data type that designates the type and quantity of value it can hold.
                    <br />
                    <br />
                    <b>i.e </b> In this level we are storing the row and column value of the bowl and then calling on those variables in the while loop.
                    <br />
                    <br />
                    <b>Syntax:</b>
                    <div class="whole">
                        <p class="one">dataType</p>
                        <p class="two"> variableName = </p>
                        <p class="three"> value</p>
                    </div>

                    <br />
                    <p class="data">Data Types:</p>
                    <p>
                        Data types specifies which type of value a variable has and there are two catergories in data types.
                        - Primitive Data Type: such as boolean, char, int, short, byte, long, float, and double.
                        - Non-Primitive Data Type or Object Data type: such as String, Array, etc
                    </p>

                    <p class="varName">Variable Name:</p>
                    <p>
                        Variable name is how that variable will be called on in your program. It is good practice to keep the name of the
                        variable the purpose of the varible.
                    </p>

                    <p class="value">Value:</p>
                    <p>
                        Value is the data that is stored in the variable.
                    </p>
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

export default varInformation;
