import React from 'react'
import Popup from 'react-popup';
import "../Style/Class.css"


/**
* The information tab for the the user learn 
* more about modifiers definiton
*/
const modifiersInformation = () => {

    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Access Modifiers Information',
                content: <p>
                    An access modifer specifies the accessibility or scope of a field, method, constructor, or class.
                    There are four types of access modifiers but for this level private and public modifiers are the only ones used.
                    <br />
                    <br />
                    <b class="priv">Private: </b> The access level of a private modifier is only within the class. It cannot be accessed from outside the class.
                    <br/>
                    <br/>
                    <b class="pub">Public: </b>The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class,
                    within the package and outside the package.
                    <br />
                    <br />
                    <b class="pub">ie:</b> In this level we can see row and col is declared as private, these variables can be only accessed in the Bone class.
                    The Bone class constructor is declared as public therefore we can call that Bone class constructor in another class like we are
                    doing in this level to access the private variables row and col to access the location of the bone.
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

export default modifiersInformation;
