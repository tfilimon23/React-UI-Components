import React from 'react';
import './Button.css';

const OperatorButton = props => {
    return(
        <div className ="operators">
            <button>{props.buttonsOnProps.divide}</button>
            <button>{props.buttonsOnProps.multiply}</button>
            <button>{props.buttonsOnProps.subtract}</button>
            <button>{props.buttonsOnProps.add}</button>
            <button>{props.buttonsOnProps.equal}</button>
        </div>
    );
}


export default OperatorButton;