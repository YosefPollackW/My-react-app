import React from 'react';
import '../App.css';

export interface ProductProps {
  title: string;
  price: number;
  image: string;
}  

const Product: React.FC<ProductProps> = ({ title, price, image }) => {
  return (
    <div className="product">
      <h5>{title}</h5>
      <img src={image} alt={title} className='images'/>
      <p>{price}</p>
      
    </div>
  );
}

export default Product;