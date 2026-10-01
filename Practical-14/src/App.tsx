import { useEffect, useState } from 'react';

function App() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Digital Clock</h1>

      <h2>{date.toLocaleTimeString()}</h2>

      <p>{date.toLocaleDateString()}</p>
    </div>
  );
}

export default App;