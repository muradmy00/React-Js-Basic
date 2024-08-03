
import './App.css';

function App() {

  return (

    
    <div className="App">
      
      <header className="App-header">

    <Information name="Mohiuddin Murad" age="23" Study="Student"></Information>

      
      </header>
    </div>
  );
}


function Information(obj){
  return(

    <div className='container'>

      <h1 className='myh1'>My name is {obj.name}.</h1>

      <p className='myp'>You are {obj.age} years old.</p>

      <h3 className='myh3'>You are a {obj.Study}.</h3>

    </div>

  );
}

export default App;
