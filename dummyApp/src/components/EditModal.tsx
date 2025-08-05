import React from 'react';
import { ProductProps } from './ProductGallery'

interface EditModalProps {
  isOpen: boolean;
  onSave: ()=> void;
  product: ProductProps;
}

const EditModal: React.FC<EditModalProps> = (EditModalProps) => {
    if (!EditModalProps.isOpen) return null
  return (
    <div>
      <p>Title</p>
      <input type="text" className='title' value={EditModalProps.product.title}/>
      <p>Price</p>
      <input type="number" className='price' value={EditModalProps.product.price}/>
      <p>Description</p>
      <input type="text" className='description' value={EditModalProps.product.description}/>
      <button className='saveButton' onClick={EditModalProps.onSave}>Save</button>
    </div>
  );
};

export default EditModal;