import React from 'react'
import "../../Style/Class.css"
import "../../Style/Control.css"
import modifiersInformation from '../../Informations/modifiersInformation ';
import constructInformation from '../../Informations/constuctInformation';

/**
 * Class creates panles with the Bone class informaion and
 * information popups for the user to get more knowledge
 *  
 */
const class18 = () => {
    return (
        <div>
            <p class="title16">
                Bone Class
            </p>
            <div class="container16">
                <p class="top">
                    <br />
                    <div class="buttons-wrapperclass">
                        <button class="seemingly-inner-button-class" onClick={modifiersInformation}>
                            <i class="fa fa-info" ></i> &nbsp;Modifiers
                        </button>
                    </div>
                    private int row; <br />
                    private int col;
                </p>
                <p class="bottom">
                    public Bone (int row, int col) &#10100;
                    <div class="buttons-wrapperclass-bottom">
                        <button class="seemingly-inner-button-class-bottom" onClick={constructInformation}>
                            <i class="fa fa-info" ></i> &nbsp;Class Constructor
                        </button>
                    </div>

                    <br />
                    &nbsp; &nbsp; this.row = row; <br />
                    &nbsp; &nbsp; this.col = col; <br />
                    &#10101;
                </p>

                <p class="bottom">
                    public int getRow()  &#10100; <br />
                    &nbsp; &nbsp; return row; <br />
                    &#10101;
                </p>

                <p class="bottom">
                    public int getCol()  &#10100; <br />
                    &nbsp; &nbsp; return col; <br />
                    &#10101;
                </p>
            </div>
        </div>

    );
}

export default class18;
