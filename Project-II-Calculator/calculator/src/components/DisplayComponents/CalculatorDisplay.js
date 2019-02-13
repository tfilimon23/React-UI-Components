import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return(
        <div className ="display">
            <p>{props.buttonsOnProps.zero}</p>   
        </div>
    );
}

export default CalculatorDisplay;
