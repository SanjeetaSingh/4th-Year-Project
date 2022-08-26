import React from 'react'
import Popup from 'react-popup';

/**
 *  Sends an alert when a command must be used
 **/
const commandUse = () => {
    <div>
        {Popup.clearQueue()}
        {Popup.create({
            title: 'No While loop used!',
            content: 'You failed you have to use while statement for this level!',
            buttons: {
                right: [{
                    text: 'Try Again',
                    className: 'danger',
                    action: function () {
                        window.location.reload(true)
                        Popup.clearQueue();
                        Popup.close()
                    }
                }]
            }
        }, true)}

    </div>

}

export default commandUse;
