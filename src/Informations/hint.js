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
                    In this level we can see row and col is declared as private in the Bone Class, these variables can be only accessed in the Bone class. <br /> <br />
                    The Bone class constructor is declared as public therefore we can call that Bone class constructor in another class like we are
                    doing in this level to access the private variables row and col to access the location of the bone.

                    <br />
                    <br />
                    An example for one of the variables are:  <br />
                    &nbsp;&nbsp;<b>bone.row</b>
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
