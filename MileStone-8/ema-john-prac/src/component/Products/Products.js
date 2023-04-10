import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = ({product, handleAddToCart}) => {
    
    const {name, img, price, ratings, seller} = product;

    



    return (
        <div className='product-container'>
            <div className="product-img">
            <img src={img} alt="" />
            </div>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p>Manufecturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='product-btn'> Add To Cart<span className='btn-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Products;