import React from 'react'
import {Link, useHistory} from "react-router-dom";
import "./Login.css";
import {useState} from "react";
import {auth} from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //it is succesful created email and password
                if (auth) {
                    history.push('/')
                }
                console.log(auth);
            })
            .catch(error => alert(error.message))

        //some fancy firebase register shittt
    }

    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it is succesful created email and password
                if (auth) {
                    history.push('/')
                }
                console.log(auth);
            })
            .catch(error => alert(error.message))

        //some fancy firebase register shittt
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""/>
            </Link>  

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e =>
                setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="passsword" value={password} 
                onChange={e => setPassword(e.target.value)} />

                <button className="login__signInButton" onClick={signIn} >Sign In</button>
                </form>

                <p>By continuing, you agree to
                    Amazon's Conditions of Use 
                    and Privacy Notice.</p>

             <button className="login__createButton" onClick={register} >Create your Amazone account</button>
                
            </div>
           

        </div>
    )
}          

export default Login;
