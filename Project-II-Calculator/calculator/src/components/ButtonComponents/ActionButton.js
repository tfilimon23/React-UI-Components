import React from 'react';
import './Button.css';


const ActionButton = props => {
    return(
        <div className ="clear">
            <button className ="clear-btn">{props.buttonsOnProps.clear}</button>
            <button className ="op-btn">{props.buttonsOnProps.divide}</button>
        </div>
    );
}

export default ActionButton;