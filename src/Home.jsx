import React from 'react';
import './Home.css';
import Product from './Product';



function Home() {
    return (
        
        <div className="home">
            <div className="home__component">
                <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Unrec_PC_Hero_1X_ENGLISH._CB416347023_.jpg" alt="" />
                <div className="home__row">
                    <Product 
                        id="1"
                        title="OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage)"
                        price={27999}
                        image="https://images-na.ssl-images-amazon.com/images/I/71aqNzEqj0L._SL1500_.jpg"
                        rating={4}
                    />
                     <Product 
                        id="2"
                        title="MSI GL65 Leopard, Intel 9th Gen. i5-9300H, 15.6 FHD Gaming Laptop , 9SCXK-065IN"
                        price={57990}
                        image="https://images-na.ssl-images-amazon.com/images/I/81cBdLyWiGL._SL1500_.jpg"
                        rating={5}
                    />
                     <Product 
                        id="3"
                        title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
                        price={42999}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71m05O2uNdL._AC_UL160_SR160,160_.jpg"
                        rating={5}
                    />
                     <Product 
                        id="4"
                        title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
                        price={179990}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Apple_Project_Eye/iMAC/AMZ_FamilyStripe_MacBook_Pro_16_inch._CB406061669_.png"
                        rating={5}
                    />
                    
                </div>

                <div className="home__row">
                <Product 
                        id="5"
                        title="boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone with Mic(Ocean Blue)"
                        price={1999}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61N1qHNeeSL._AC_UL115_.jpg"
                        rating={5}
                    />
                 <Product 
                        id="6"
                        title="Canon PowerShot SX740 Digital Camera w/40x Optical Zoom and 3 Inch Tilt LCD - 4K Video "
                        price={25499}
                        image="https://m.media-amazon.com/images/I/71DXSTVy75L._AC_UY218_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="7"
                        title="Canon EOS 80D 24.2MP Digital SLR Camera (Black) + 16GB Memory Card"
                        price={92499}
                        image="https://m.media-amazon.com/images/I/61VFkA-rceL._AC_UY218_.jpg"
                        rating={5}
                    />

                    <Product 
                        id="8"
                        title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                        price={1999}
                        image="https://m.media-amazon.com/images/I/616bhfyXimL._AC_UY218_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="9"
                        title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
                        price={42999}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase4/OnePlus_8T/D18536943_Jupiter2020_Phase4_OnePlus_8T_1500x300.jpg"
                        rating={4}
                    />
                    
                </div>

                <div className="home__row">
                    <Product 
                        id="10"
                        title="Dettol Original Germ Protection Handwash Liquid Soap Refill, 1500ml"
                        price={185.09}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51ndHwJyiRL._AC_US160_FMwebp_QL70_.jpg"
                        rating={4}
                    />
                     <Product 
                        id="11"
                        title="Ariel Matic Top Load Detergent Washing Powder - 3 kg and Ariel Matic Liquid Detergent - 1 Litre"
                        price={762.00}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41iPdbh6X6L._AC_SX184_.jpg"
                        rating={5}
                    />

                   <Product 
                        id="12"
                        title="NIVEA Soft, Light Moisturising Cream, 300ml by Nivea"
                        price={265.05}
                        image="https://images-eu.ssl-images-amazon.com/images/I/413zv7AQjlL._AC_US160_FMwebp_QL70_.jpg"
                        rating={4}
                    />
                     <Product 
                        id="13"
                        title="Set Wet Deodorant Spray Perfume, 150ml (Cool, Charm and Mischief Avatar, Pack of 3) "
                        price={246}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51Gf8qID4jL._AC_SX184_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="14"
                        title="Men's Classic Fit Hooded T-shirt."
                        price={228}
                        image="https://m.media-amazon.com/images/I/71I2EQQ1q-L._AC_UL320_.jpg"
                        rating={4}
                    />
                     <Product 
                        id="15"
                        title="Men's Regular Fit Jeans"
                        price={489}
                        image="https://m.media-amazon.com/images/I/61TwfPRLhrL._AC_UL320_.jpg"
                        rating={4}
                    />

                   <Product 
                        id="16"
                        title="Keya Fab Anarkali Type Semi Stitched Taffeta Silk Salwar Suit For Women (Blue)"
                        price={150}
                        image="https://m.media-amazon.com/images/I/61vYeocVWuL._AC_UL320_.jpg"
                        rating={3}
                    />
                     <Product 
                        id="17"
                        title="Keya Fab Women's Printed Banglory satin Multi color  for Womens and Girls(Free Size; Multi color) "
                        price={199}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71wGPrEAA3L._AC_UL160_SR160,160_.jpg"
                        rating={3}
                    /> 
                </div>

                <div className="home__row">
                <Product 
                        id="18"
                        title="Voltas Beko 8 Place Table Top Dishwasher (DT8S, Silver, Inbuilt Heater, Adjustable Upper Shelf)"
                        price={19990}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31f95VzP8kL._AC_US160_FMwebp_QL70_.jpg"
                        rating={4}
                    />
                     <Product 
                        id="19"
                        title="Wipro Furniture Arena Natural Wood Office Desk & Study Table with Inbuilt Storage (Beech)"
                        price={13499}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51EPw7gmU9L._AC_SX184_.jpg"
                        rating={4}
                    />

                   <Product 
                        id="20"
                        title="LG 437 L 2 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-T432APZY, Shiny Steel, Convertible)"
                        price={40990}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31AJVUV4UkL._AC_SX184_.jpg"
                        rating={4}
                    />
                     <Product 
                        id="21"
                        title="LG 6.5 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (6 Motion Direct Drive) "
                        price={28980}
                        image="https://images-eu.ssl-images-amazon.com/images/I/810-NkbN1OL._AC_UL320_SR228,320_.jpg"
                        rating={4}
                    /> 
                    
                </div>
            </div>
        </div>
    )
}

export default Home;








//  https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
