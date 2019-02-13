import React from 'react';
import './Button.css';

const OperatorButton = props => {
    return(
        <div className ="operators">
            <button className ="op-button">{props.buttonsOnProps.divide}</button>
            <button className ="op-button">{props.buttonsOnProps.multiply}</button>
            <button className ="op-button" >{props.buttonsOnProps.subtract}</button>
            <button className ="op-button" >{props.buttonsOnProps.add}</button>
            <button className ="op-button">{props.buttonsOnProps.equal}</button>
        </div>
    );
}


export default OperatorButton;