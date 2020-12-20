import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
//import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';


//const promise = loadStripe('pk_test_51HkAAwD8x4TPA63dFFw6V50j8mN0vVUZ2VrhfT4ZTLEYYDzoHtDAZ3eyNkH8BCiw1stBTdeGCJwhtRbwZJGxOz99008b7KUF4w');



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component

    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>>', authUser)

      if (authUser){
        // The user just loggedIn / the user was logged in

        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else{
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
       <div className="app">
       <Switch>
       <Route path="/orders">
       <Header />
        <Orders/>
       </Route>
       <Route path="/login">
        <Login/>
       </Route>

       <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>

         <Route path="/payment">
            <Header />
            {/* <Elements stripe = { promise }>
            </Elements> */}
            
            <Payment/>
         </Route>

         <Route path="/">
            <Header />
            <Home/>
            <Footer/>
         </Route>
       </Switch>
    </div>
    </Router>
   
  );
}

export default App;
