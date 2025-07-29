import React from "react";
import Product from "./Product";
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


const ProductGallery: React.FC = () => {
    
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
    )
}
export default ProductGallery;