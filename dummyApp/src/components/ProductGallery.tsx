import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import Modal from "./Modal";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  stock: number;
  category: string;
}

const ProductGallery: React.FC = () => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleProductClick = (product: ProductProps) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSave = (updatedProduct: ProductProps) => {
    setData(prevData => 
      prevData.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    closeModal();
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setData(data.products);
        setError(null);
      })
      .catch(err => {
        setError("Failed to load products");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='products'>
      {data.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)}>
          <Product
            image={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        </div>
      ))}
      
      {selectedProduct && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          product={selectedProduct}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default ProductGallery;
//do the filter and the edit with onChange
//git add .
//git commit -m ""
//git push origin main
/**/ 
