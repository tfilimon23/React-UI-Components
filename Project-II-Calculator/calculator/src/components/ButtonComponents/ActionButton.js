import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <div className ="clear">
            <button>{props.buttonsOnProps.clear}</button>
        </div>
    );
}

export default ActionButton;