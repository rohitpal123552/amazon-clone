import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({id, title, price, image, rating}) {
    const [{ cart}, dispatch] = useStateValue();

    console.log("This is the cart  >>>", cart);

    const addToCart = () =>{
    // dispatch the iem in to data layer
    dispatch({
        type: "ADD_TO_CART",
        item:{
            id:id, 
            title:title,
            price:price,
            image:image,
            rating:rating,
        },
        
    });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                    
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add To Cart</button>
            
        </div>
    )
}

export default Product;
