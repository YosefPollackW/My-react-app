import './App.css';
import Product from './components/Product';
import { useState, useEffect } from "react";

interface ProductType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface ApiResponse {
  products: ProductType[];
}

function App() {
  const [json, setJson] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data: ApiResponse) => {
        console.log(data);
        setJson(data.products);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className='products'>
        {json.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
