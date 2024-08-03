
import { useState } from 'react';
import './App.css';

function App() {

  let [count,setCount] = useState(0);

  if(count === -1){

    count = 0;

  }

  const handleIncrease = () => setCount(count+1);


  return (
  
    <div className="App">
      
      <header className="App-header">

    {/* Like Facebook Post*/}
    <h1>Learning Use State Hook</h1>

    <button onClick={handleIncrease}>Increase</button>
    


    <h3>Count {count}</h3>
    {/* initial 0 */}


    <button onClick={() => setCount(count-1)}>Decrease</button>


      </header>
    </div>
  );
}








export default App;
