import logo from './logo.svg';
import './App.css';
import { hover } from '@testing-library/user-event/dist/hover';

function App() {

  let user = {
    name:"Mohiuddin Murad",
    price:4000,
    age:18
  }

  let pStyle = {
    backgroundColor:"tomato",
    color:"black",
    fontSize:"20px"
  }


  return (

    
    <div className="App">
      
      <header className="App-header">

      <p style={pStyle}>React Js Practice some Examples</p>

        <img src={logo} className="App-logo" alt="logo" />
        
        <h1 style={{color:"cyan"}}>Welcome {user.name}</h1>

        <h3 style={{color:"red"}}>Your Course fee {user.price}</h3>


        <h4 style={{color:"tomato"}}>You must be {user.age} years old</h4>


      <button style={{cursor:"pointer",height:"2.5rem",width:"5rem",backgroundColor:"tomato",color:"black",fontSize:"15px",button:hover}}>Enroll Course</button>
        
        <a style={{color:"white",textDecoration:"none",margin:"25px"}}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and learn more also
        </a>
      </header>
    </div>
  );
}

export default App;
