import React from 'react'
import { ProductProps } from './ProductGallery'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEdit: () => void;
    product: ProductProps; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product, onEdit }) => {
    if (!isOpen) return null

    return (

        <div >
            <button className="close-button" onClick={onClose}>X</button>
            <h2>{product.title}        <button className='editButton' onClick={onEdit}>Edit</button></h2>
            <p>${product.price}</p>
            <p>{product.stock}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
        </div>

    );
};

export default Modal;
