import React from 'react';
import './Button.css';


const NumberButton = props => {
    return(
        <div className ="numbers">
        <div className ="top-row">
            <button className="top-row-btn">{props.buttonsOnProps.seven}</button>
            <button className="top-row-btn">{props.buttonsOnProps.eight}</button>
            <button className="top-row-btn">{props.buttonsOnProps.nine}</button>
            <button className ="op-btn">{props.buttonsOnProps.multiply}</button>

        </div>
        <div className ="middle-row">
            <button className="middle-row-btn">{props.buttonsOnProps.four}</button>
            <button className="middle-row-btn">{props.buttonsOnProps.five}</button>
            <button className="middle-row-btn">{props.buttonsOnProps.six}</button>
            <button className ="op-btn" >{props.buttonsOnProps.subtract}</button>

        </div>
        <div className ="bottom-row">
            <button className="bottom-row-btn">{props.buttonsOnProps.one}</button>
            <button className="bottom-row-btn">{props.buttonsOnProps.two}</button>
            <button className="bottom-row-btn" >{props.buttonsOnProps.three}</button>
            <button className ="op-btn" >{props.buttonsOnProps.add}</button>

        </div>
        <div className="zero">
            <button className ="zero-btn">{props.buttonsOnProps.zero}</button>
            <button className ="op-btn">{props.buttonsOnProps.equal}</button>
        </div>
        </div>
    );
}

export default NumberButton;
