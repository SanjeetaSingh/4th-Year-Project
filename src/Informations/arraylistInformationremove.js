import React from 'react'
import Popup from 'react-popup';
import '../Style/Information.css'


/**
* The information tab for the the user learn 
* more about arraylist definiton with a remove example.
*/
const arraylistInformation = () => {


    return (
        <div>
            {Popup.clearQueue()}
            {Popup.create({
                title: 'ArrayLists Information',
                content: <p>
                    An ArrayList class is a resizable array which is used to store dynamically sized collection of elements.
                    They grows its size automatically when new elements are added to it.
                    ArrayLists are a part of Java's collection framework and implements Java's List interface. There are many things you can do with
                    ArrayLists.
                    <br />
                    <br />
                    <b> ArrayLists have many useful methods such as: </b>
                    <div class="whole">
                        <p class="one">add() - </p> <p>Add method adds an element to the list. </p><br />
                        <p class="two"> get(index) - </p> <p>Get method gets the element of a specified index within a list.</p> <br />
                        <p class="three"> remove(index) - </p> <p>Remove method removes an element of from a list.</p> <br />
                        <p class="size">size() - </p> <p>Size method returns the size of the list.</p>

                        <br />
                        and more.
                    </div>
                    <br />
                    <b>i.e </b> In this level we are removing the bone Object with the remove() method.  The remove method is called it removes
                    the bone Object from the list.
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

export default arraylistInformation;
