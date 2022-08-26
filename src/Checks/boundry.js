import React from 'react'
import Popup from 'react-popup';

/**
* Sends an alert when user has passed the boundry of the board
*/
const boundry = () => {
    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'Oops past the boundry',
                content: 'You have failed to get the dog to the goal!',
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
    );
}

export default boundry;
