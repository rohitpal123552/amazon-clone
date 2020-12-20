import React, {useState } from 'react'; 
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { getCartTotal } from './reducer';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { db, auth } from './firebase';
import Login from "./Login";
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Payment() {
    const history = useHistory();
    const [{ cart, user }, dispatch] = useStateValue();


    const handleToken = async (token) =>{
        //console.log(token);
         const product = {name: 'ALL product', price: getCartTotal(cart) }
 
         const response = await axios.post('http://localhost:8080/checkout', {
             product,
             token
         });
        
        console.log("RESPONSE", response);
        toast.success("You have paid successfully. Now you can continue shopping.", 
        { position: toast.POSITION.TOP_RIGHT });

        dispatch({
            type: "EMPTY_CART"
            });

        history.replace('/');
 
    }

   
   
    return (
        <div className="payment">
            <div className="payment__container">
            
                    <h1>Checkout (
                        <Link to="/checkout"> { cart?.length} Items</Link>
                    )</h1>
        
                  {/* Payment section delivery address */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123, New Delhi</p>
                        <p>Noida Side</p>
                    </div>
                    
                </div>

                {/* payment section Item reviev */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cart.map(item => (
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

                {/* payment sction - payment */} 

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Details</h3>
                    </div>

                    <div className="payment__details">

                    
                        {/* Stripe magic will go */}

                        <StripeCheckout
                            stripeKey="pk_test_51HkAAwD8x4TPA63dFFw6V50j8mN0vVUZ2VrhfT4ZTLEYYDzoHtDAZ3eyNkH8BCiw1stBTdeGCJwhtRbwZJGxOz99008b7KUF4w"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={ getCartTotal(cart) * 100 }
                        >
                        <button className="payment__button">
                            {user ? "Pay Now "  : history.push('/login') }
                        </button>
                            
                        </StripeCheckout>

                       
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment;















// }).then(({ paymentIntent }) => {
            
//     // paymentIntent = payment confirmation

//     db.collection('users')
//         .doc(user?.uid)
//         .collection('orders')
//         .doc(paymentIntent.id)
//         .set({
//             cart: cart,
//             amount: paymentIntent.amount,
//             created: paymentIntent.created
//         })

//     setSucceeded(true);
//     setError(null);
//     setProcessing(false);

//     dispatch({
//         type: "EMPTY_CART"
//     })

   
//     history.replace('/orders')
// })

// }







// <form onSubmit={handleSubmit} >
// <CardElement onChange={handleChange} />
// <div className="payment__container">
//     <CurrencyFormat 
//         renderText={(value) =>(
//             <h3>Order Total: {value}</h3>
//         )}
//         decimalScale={2}
//         value={getCartTotal(cart)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={ "$" }
//     />
//     <button disable={ processing || disable || 
//         succeeded }> 
//         <span>{processing ? <p>Processing</p>
//         : "Pay Now"}</span> 
//     </button>
// </div> 

// {/* Error */}
// {
//     error && <div>{ error }</div>
// }
// </form>