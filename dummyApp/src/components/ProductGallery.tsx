import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import EditModal from "./EditModal";
//to be able to use the data from the api request i have to create a interface that gives types to the values i get
export interface ProductProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  stock: number;
  category: string;
}
//same thing i said above, the data i get from the json is an array of the interface above
interface ApiResponse {
  products: ProductProps[];
}


const ProductGallery: React.FC = () => {//this is how to create a componnent in tsx

  const [data, setData] = useState<ProductProps[]>([]);//the generic is for the value the state holds, and the empty array is because later it will be an ful array there fron the data i get
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [fetchingError, setFetchingError] = useState<boolean>(false);

  const handleProductClick = (product: ProductProps) => {
    setSelectedProduct(product);
    setModalOpen(true); //openning the modal
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null); //closing the modal
  };

  const openEdit = () => {

  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data: ApiResponse) => {
        setData(data.products);//this updates the state, and instead an empty array as above, it recives the data.
        console.log(data);
      })
      .catch(err => console.error("Error fetching data:", err)).then(()=>setFetchingError(true));
  }, []);
  if (!fetchingError) return (
    <div><p>loading</p></div>
  )
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
          onEdit={openEdit}
          isOpen={modalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
      {selectedProduct&&<EditModal isOpen={true} onSave={()=>{}} product={selectedProduct}/>}
    </div>
  )
}
export default ProductGallery;
//git add .
//git commit -m ""
//git push origin main
