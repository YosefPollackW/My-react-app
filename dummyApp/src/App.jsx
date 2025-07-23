import './App.css';
import Product from './components/Product';
import { useState, useEffect } from "react";

function App() {
  const [json, setJson] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setJson(data.products);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      {json.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default App;
