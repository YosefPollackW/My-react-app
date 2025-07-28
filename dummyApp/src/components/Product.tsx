import React from 'react';

interface ProductProps {
  title: string;
  description: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ title, description, image }) => {
  return (
    <div className="product">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default Product;