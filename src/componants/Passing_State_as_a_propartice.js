import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  //console.log(count);  //0
  //console.log(setCount); //like of function

  return (
  
    <div className="App">
      
      <header className="App-header">

      <h2>Passing State as a Propartice</h2>

      <button onClick={() => setCount(count+1)}>Increase</button>

      <h3>Count: {count}</h3>

      <Counter count={count}></Counter>

      </header>
    </div>
  );
}


//Components means "my html tag"
function Counter(props){

  //console.log(props); //as a Object

  return(

    <div className=''>

      <h2>Count form Counter : {props.count}</h2>

    </div>

  );
}



export default App;
