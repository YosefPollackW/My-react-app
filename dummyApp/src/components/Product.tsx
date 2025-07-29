import React from 'react';
import '../App.css';

interface ProductProps {
  title: string;
  description: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ title, description, image }) => {
  return (
    <div className="product">
      <h5>{title}</h5>
      <img src={image} alt={title} className='images'/>
      <p>{description}</p>
      
    </div>
  );
}

export default Product;