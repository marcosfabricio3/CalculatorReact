import './App.css';
import ambarLogo from './images/ambar-logo.png';
import Button from './components/buttons.js';
import Screen from './components/screen.js';
import ClearButton from './components/clear-button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  // add values to screen
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  // calculate result
  const calculateResult = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert ('Please enter some value');
    }
  };

  return (
    <div className="App">
      <div className='container-logo'>
        <img 
          src={ambarLogo}
          className='ambar-logo'
          alt='Logo Ambar' />
      </div>
      <div className='container-calculator'>
        <Screen input={input} />
        <div className='row'>
          <Button handleClick = {addInput}>7</Button>
          <Button handleClick = {addInput}>8</Button>
          <Button handleClick = {addInput}>9</Button>
          <Button handleClick = {addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick = {addInput}>5</Button>
          <Button handleClick = {addInput}>6</Button>
          <Button handleClick = {addInput}>4</Button>
          <Button handleClick = {addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick = {addInput}>1</Button>
          <Button handleClick = {addInput}>2</Button>
          <Button handleClick = {addInput}>3</Button>
          <Button handleClick = {addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick = {calculateResult}>=</Button>
          <Button handleClick = {addInput}>0</Button>
          <Button handleClick = {addInput}>.</Button>
          <Button handleClick = {addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClea={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
