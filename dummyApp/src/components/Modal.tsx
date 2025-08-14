import React, { useState } from 'react'
import { ProductProps } from './ProductGallery'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: ProductProps; 
    onSave: (updatedProduct: ProductProps) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product, onSave }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);

    if (!isOpen) return null;

    const handleSave = () => {
        const updatedProduct = { ...product, title, price, description };//all the values from the edit modal goes to the updatedProduct (spread operator)
        onSave(updatedProduct);
        setIsEditMode(false);
    };

    if (isEditMode) {
        return (
            <div className="modalOpacy">
                <div className="modalContent">
                    <button onClick={onClose}>X</button>
                    <h2>Edit Product</h2>
                    
                    <div>
                        <p>Title:</p>
                        <input 
                            value={title}
                            onChange={(item) => setTitle(item.target.value)}
                        />
                        
                        <p>Price:</p>
                        <input 
                            type="number"
                            value={price}
                            onChange={(item) => setPrice(Number(item.target.value))}
                        />

                        <p>Description:</p>
                        <textarea 
                            value={description}
                            onChange={(item) => setDescription(item.target.value)}
                        />
                        
                        <div>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setIsEditMode(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="modalOpacy" >
            <div className="modalContent">
                <button onClick={onClose}>X</button>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Category: {product.category}</p>
                <p>Description: {product.description}</p>
                <button onClick={() => setIsEditMode(true)}>Edit</button>
            </div>
        </div>
    );
};

export default Modal;
