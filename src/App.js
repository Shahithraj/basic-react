import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 120000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if(value > 0){
      fetch(`https://jsonplaceholder.typicode.com/todos/${value}`)
      .then(response => response.json())
      .then(json => setData(json))
    }
  },[value])

  const handleApi = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div className="App">
      {Object.keys(data).length > 0 && <h1>{data.title}</h1>}
      <button onClick={handleApi}>Fetch API</button>
    </div>
  );
}

export default App;
