import { useState } from 'react';
import './App.css';

function CalculatorSection() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);
  const [isEditingName, setIsEditingName] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const saveName = () => {
    setSavedName(name);
    setIsEditingName(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) { // Ensure only numbers are accepted
      setInputValue(value);
    }
  };

  const calculateResult = (operation) => {
    const number = parseFloat(inputValue) || 0;
    if (operation === 'add') {
      setResult(result + number);
    } else if (operation === 'subtract') {
      setResult(result - number);
    }
    setInputValue('');
  };

  return (
    <div className="section">
      {savedName && !isEditingName ? (
        <div className="header">
          <h3>{savedName}</h3>
          <button className="edit-btn" onClick={() => setIsEditingName(true)}>Edit</button>
        </div>
      ) : (
        <div className="nameInput">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            className="name-field"
          />
          <button onClick={saveName} className="save-btn">Save</button>
        </div>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
        className="number-field"
      />
      <div className="buttons">
        <button onClick={() => calculateResult('add')}>+</button>
        <button onClick={() => calculateResult('subtract')}>-</button>
      </div>
      <div className="result-box">Result = {result}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <CalculatorSection />
        <CalculatorSection />
      </div>
    </div>
  );
}

export default App;
