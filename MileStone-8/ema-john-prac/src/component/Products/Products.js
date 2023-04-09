import React from 'react';
import './Product.css'

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
            <button onClick={()=>handleAddToCart(product)} className='product-btn'>Add To Cart</button>
        </div>
    );
};

export default Products;