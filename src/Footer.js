import React from 'react';
import './Footer.css';
import {Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">

            <div className="footer__signIn">
                <div className="footer__border">
                     <p>See personalized recommendations</p>
                     <Link to="/login">
                     <button className="footer__signButton">Sign In</button>
                     </Link>
                   
                    <p>New Customer ? 
                    <Link to="/login">Start Here</Link></p>
                </div>
               
            </div>


            <div className="footer__list">
                <ul>
                    <h3>Get To Know Us</h3>
                    <li> <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About Us</a></li>
                    <li> <a href="https://amazon.jobs/en/">Careers</a></li>
                    <li><a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Press Release</a></li>
                    <li><a href="https://www.amazon.in/b?ie=UTF8&node=8872558031&ref_=footer_cares">Amazon Cares</a></li>
                    <li><a href="https://www.amazon.in/Online-Charity/b?ie=UTF8&node=4594605031&ref_=footer_smile">Gift a smile</a></li>
                </ul>

                <ul>
                    <h3>Connect With Us</h3>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://twitter.com/RohitKu87280940">Twitter</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                
                </ul>

                <ul>
                    <h3>Make Money with Us</h3>
                    <li><a href="">Sell on Amazon</a></li>
                    <li><a href="">Sell under Amazon Accelerator</a></li>
                    <li><a href="">Become an Affiliate</a></li>
                    <li><a href="">Fulfilment by Amazon</a></li>
                    <li><a href="">Advertise Your Products</a></li>
                    <li><a href="">Amazon Pay on Merchants</a></li>
                </ul>
                <ul>
                    <h3>Let Us Help You</h3>
                    <li><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">COVID-19 and Amazon</a></li>
                    <li><a href="">Your Account</a></li>
                    <li><a href="">Returns Centre</a></li>
                    <li><a href="">100% Purchase Protection</a></li>
                    <li><a href="">Amazon App Download</a></li>
                    <li><a href="">Amazon Assistant Download</a> </li>
                    <li><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200507590&ref_=footer_gw_m_b_he">Help</a></li>
                </ul>
                
            </div>

            <hr/>

            <div className="footer__image">
                <a href="">
                    <img className="footer__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
                </a>
               
          

            <div className="footer__list1">
                <ul>
                    <li><a href="">Australia</a> </li>
                    <li><a href="">Brazil</a></li>
                    <li><a href="">Canada</a></li>
                    <li><a href="">China</a></li>
                    <li><a href="">France</a></li>
                    <li><a href="">Germany</a></li>
                    <li><a href="">Italy</a></li>
                    <li><a href="">Japan</a></li>
                    <li><a href="">Mexico</a></li>
                    <li><a href="">Netherlands</a></li>
                    <li><a href="">Singapur</a></li>
                    <li><a href="">United Arab Emirates</a></li>
                    <li><a href="">United Kingdom</a></li>
                    <li><a href="">United States</a></li>
                </ul>
            </div>
            </div> 

            <div className="footer__2">
                <ul>
                   <li><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940&ref_=footer_cou">Conditions of Use & Sale</a></li>
                   <li><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380&ref_=footer_privacy">Privacy Notice</a></li>
                   <li><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=202075050&ref_=footer_iba">Interest-Based Ads</a></li>
                </ul>
                <p className="footer__Paragraph">© 1996-2020, Amazon.com, Inc. or its affiliates</p>

        </div>
                     
        </div>
        
    )
}

export default Footer;
