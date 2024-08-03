
import './App.css';

function App() {

  const character = ["Thor","Hulk","Thenos","Loki"];

  const product = [

    {Name : "Betray",Price:"50"},
    {Name : "Phone",Price:"500"},
    {Name : "Laptop",Price:"500"},
    {Name : "Desktop",Price:"50000"}

  ];

  return (

    
    <div className="App">
      
      <header className="App-header">

    <Person name="Mohiuddin Murad" job="Coder" fav={character[0]}></Person>
    <Person name="Miraj" job="Fornt End Developer" fav={character[1]}></Person>
    <Person name="ABCD" job="Web Developer" fav={character[3]}></Person>


    {/*Data gula automatic show kortice*/}
    {character.map(data => <h1>{data}</h1>)}


    {product.map(info => <Product product={info}></Product>)}

      </header>
    </div>
  );
}




function Person(props){

  const personStyle = {

    border:"2px solid cyan",
    width:"50%",
    margin:"10px",
    backgroundColor:"blue"


  }

  return(

    <div style={personStyle}>

    <h1>My Name is {props.name}.</h1>
    <p>You are {props.job}</p>
    <p>Your Favorite Character is {props.fav}</p>

    </div>
 

  );
}



function Product(info){

const productStyle = {

    border:"2px solid cyan",
    width:"50%",
    margin:"10px",
    backgroundColor:"tomato",
    padding:"20px"


  }

  return(

    <div style={productStyle}>

    <h2>Product Name: {info.product.Name}</h2>
    <h3>Product Price {info.product.Price}</h3>
    <button>Bye Now</button>

    </div>

  );
}

export default App;
