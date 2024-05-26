import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Img from "./components/Img";
import products from "./products";
import Card from "./components/Card";

function App() {
  const productList = products.map((product) => {
    //the Card here is found in Card.js (where we gave it its components )
    return (
      <Card name={product.name} image={product.image} price={product.price} />
    );
  });
  return (
    //we called the productList that we did already in products.js because it includes the data that we want to display it in the website.
    <div className="App">
      <Title />
      <Img />

      {productList}
    </div>
  );
}

export default App;
