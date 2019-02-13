import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
        <div className ="numbers">
        <div className ="top-row">
            <button className="top-row-btn">{props.buttonsOnProps.seven}</button>
            <button className="top-row-btn">{props.buttonsOnProps.eight}</button>
            <button className="top-row-btn">{props.buttonsOnProps.nine}</button>
        </div>
        <div className ="middle-row">
            <button className="middle-row-btn">{props.buttonsOnProps.four}</button>
            <button className="middle-row-btn">{props.buttonsOnProps.five}</button>
            <button className="middle-row-btn">{props.buttonsOnProps.six}</button>
        </div>
        <div className ="bottom-row">
            <button className="bottom-row-btn">{props.buttonsOnProps.one}</button>
            <button className="bottom-row-btn">{props.buttonsOnProps.two}</button>
            <button className="bottom-row-btn" >{props.buttonsOnProps.three}</button>
        </div>
        <div className="zero">
            <button className ="zero-btn">{props.buttonsOnProps.zero}</button>
        </div>
        </div>
    );
}

export default NumberButton;
