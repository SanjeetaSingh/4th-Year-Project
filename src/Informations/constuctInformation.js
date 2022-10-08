import React from 'react'
import Popup from 'react-popup';
import "../Style/Class.css"


/**
* The information tab for the the user learn 
* more about modifiers definiton.
*/
const constructInformation = () => {

    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Class Information',
                content: <p>
                    This class is storing the private varibles and making them publiclay accessable to other
                    classes with the help of the class constructor. A constructor is a special method that is used to initialize objects,
                    and is called when the object is created.
                    <br />
                    <br/>
                    <b class="con">ie:</b> In this level the private row and col variable are passed into this constructor which allows you to get the bones row and col
                    by calling on the classes constructor. The this keyword is used to refer the current variable of a block.
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

export default constructInformation;
