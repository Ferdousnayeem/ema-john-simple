import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }, []);

    useEffect( () => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);

        const savedCart = [];
        
        // step 1: get id
        for (const id in storedCart) {
            // console.log(id);
            
            //step 2: get the product by using id
            const savedProduct = products.find(product => product.id === id);
            // console.log(savedProduct);

            if (savedProduct) {
                //step 3: get quantity of the product
                const quantity = storedCart[id];
                // console.log(quantity);
                savedProduct.quantity = quantity;
                //step 4: add product to the savedCart
                savedCart.push(savedProduct);
            }
        }
        //step 5: set the cart
        setCart(savedCart)
    }, [products]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
        // console.log(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                    product={product}
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;