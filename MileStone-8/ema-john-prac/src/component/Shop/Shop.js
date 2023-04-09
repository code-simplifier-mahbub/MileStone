import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts]= useState([]);


    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        console.log(product)
    }



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                   products.map(product => <Products
                    key={product.id}
                    product= {product}
                    handleAddToCart={handleAddToCart}
                   ></Products>)
                }
            </div>
            <div className="cart-container">cart container</div>
        </div>
    );
};

export default Shop;