import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getStoreCart } from '../utilities/fakedb';


const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getStoreCart();
        console.log(storedCart)
    },[])

    const handleAddToCart = (product) =>{
        // console.log(product)
        
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;