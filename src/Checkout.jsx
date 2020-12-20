import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';




function Checkout() {
    const [{ cart, user } , dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <a href="https://www.amazon.in/b/ref=hdfc_ilm?node=22420789031&pd_rd_w=5nVhZ&pf_rd_p=f126fbc6-3369-4868-9eba-3edb20a8cd35&pf_rd_r=Y0N1S3S3BP01APXJVZJV&pd_rd_r=1a8bf39f-cb30-4083-a3fc-5aa3b4f0e868&pd_rd_wg=WVhN4">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/ILMs_Phase-4/Bank-and-NCE/Category_ILM_640x45_3._CB416322597_.jpg" alt="" />
             </a>
                <div>
                   <h3>Hello, { user?.email}</h3>
                   <h2 className="checkout__title">Your Shopping Cart</h2>
                    
                  
                            {cart.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                  
                        
                </div>
            </div>
           

           <div className="checkout__right">
               <Subtotal/>
           </div>
        </div>
    )
}

export default Checkout;
