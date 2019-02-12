import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
        <div className ="numbers">
        <div className ="top-row">
            <button>{props.buttonsOnProps.seven}</button>
            <button>{props.buttonsOnProps.eight}</button>
            <button>{props.buttonsOnProps.nine}</button>
        </div>
        <div className ="middle-row">
            <button>{props.buttonsOnProps.four}</button>
            <button>{props.buttonsOnProps.five}</button>
            <button>{props.buttonsOnProps.six}</button>
        </div>
        <div className ="bottom-row">
            <button>{props.buttonsOnProps.one}</button>
            <button>{props.buttonsOnProps.two}</button>
            <button>{props.buttonsOnProps.three}</button>
        </div>
        <div className="zero">
            <button>{props.buttonsOnProps.zero}</button>
        </div>
        </div>
    );
}

export default NumberButton;
