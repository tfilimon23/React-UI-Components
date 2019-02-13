import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const Buttons = {
  clear: 'clear',
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  divide: '/',
  multiply: '*',
  subtract: '-',
  add: '+',
  equal: '='
}

const App = () => {
  return (
    <div className="container">
    <CalculatorDisplay buttonsOnProps={Buttons} />
    <ActionButton buttonsOnProps={Buttons} />
    <NumberButton buttonsOnProps={Buttons} />
    </div>
  );
};

export default App;



 








