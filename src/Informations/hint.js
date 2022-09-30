import React from 'react'
import Popup from 'react-popup';
import "../Style/Class.css"


/**
* The information tab for the the user learn 
* more about modifiers definiton
*/
const hint = () => {

    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Access Modifiers Information',
                content: <p>
                    In this level a Bone Class is already predefined for you and you need to access the values 
                    for row and col from that class. That is where getters come, getters will allow you to 
                    access the values within that class. You need to call on the created Object Bone and call on the 
                    getter names that are mentioned above.
                    <br />
                    <br />
                    An example for one of the variables are:  <br />
                    &nbsp;&nbsp;<b>bone.getRow()</b>
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

export default hint;
