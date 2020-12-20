const cors = require('cors');
const express = require('express');
const stripe = require('stripe')('sk_test_51HkAAwD8x4TPA63dCK3HIbtIyEmC8dUlV4qbAQt2OcnARR5ZZ2GCaL95UuxUBvohjzkiHolBMOH5vdyJgVymUT3200s5qqg6or');
const { v4: uuidv4 } = require('uuid');



// - app config
const app = express();

// MIdlleware
app.use(express.json());
app.use(cors());


// route

app.get("/",  (req, res) => {
    res.send("WELCOME TO OUR AMAZONE CLONE ");
})

app.post('/checkout', async (req, res) =>{
    let error;
    let status;

    try {
        const { product, token } = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const key = uuidv4();
        const charge = await stripe.charges.create(
            {
                amount: product.price*100 ,
                currency: 'INR',
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchase of ${product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
             
            { idempotencyKey: key })
            status = "success";
        
    } catch (error) {
        console.log(error);
        status = "error"; 
    }

    res.json({ status });

})


// Listen
app.listen(8080, () => console.log("YOUR APP IS RUNNING PORT NUMBER 8080"));

