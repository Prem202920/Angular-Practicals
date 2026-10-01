import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | string>('');

  const calculate = (operator: string) => {
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;

      case '-':
        setResult(num1 - num2);
        break;

      case '*':
        setResult(num1 * num2);
        break;

      case '/':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
    }
  };

  const clear = () => {
    setNum1(0);
    setNum2(0);
    setResult('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />

      <br /><br />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />

      <br /><br />

      <button onClick={() => calculate('+')}>+</button>
      <button onClick={() => calculate('-')}>-</button>
      <button onClick={() => calculate('*')}>×</button>
      <button onClick={() => calculate('/')}>÷</button>
      <button onClick={clear}>Clear</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;