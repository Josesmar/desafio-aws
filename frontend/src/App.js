import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSum = async () => {
    const response = await fetch('http://localhost:5000/api/sum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1, num2 }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button onClick={handleSum}>Somar</button>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default App;
