import React from "react";
import '../style-sheets/clear-button.css'

function ClearButton (props) {
    return(
        <div className='Clear-button' onClick={props.handleClea}>
            {props.children}
        </div>
    );
}

export default ClearButton;