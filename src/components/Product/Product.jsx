import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);

    const { img, name, price, ratings, seller } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: {price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;