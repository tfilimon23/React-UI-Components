import React from 'react';
import './Button.css';

const OperatorButton = props => {
    return(
        <div className ="operators">
            <button className ="op-btn">{props.buttonsOnProps.divide}</button>
            <button className ="op-btn">{props.buttonsOnProps.multiply}</button>
            <button className ="op-btn" >{props.buttonsOnProps.subtract}</button>
            <button className ="op-btn" >{props.buttonsOnProps.add}</button>
            <button className ="op-btn">{props.buttonsOnProps.equal}</button>
        </div>
    );
}


export default OperatorButton;