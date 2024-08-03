import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users,setUsers] = useState([]);

  useEffect( ()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users") //external API
    .then(response => response.json())
    .then(json => setUsers(json));
  },[])

  // Dependency hisebe [] blank array diye dibo jate bar bar call na kore

  


  return (
  
    <div className="App">
      
      <header className="App-header">

      {/* Fornt end er effect take handle korce */}
      <h5>Learning Use Effect Hook and Loading Data form API</h5>
   
      <h3>Total User: {users.length}</h3>

      {users.map(info => <li>{info.name}</li>)}

      

      </header>
    </div>
  );
}










export default App;
