const dotenv = require("dotenv")

//const stripe = require("stripe")(process.env.STRIPE_KEY)
const stripe = require("stripe")("sk_test_51LflGiBfZd4ZWVbTN0NLcAQ0LkwibK4iU3ZJZAjGHqf0gHz7e3Kl3j2XfQCDKhgc6wvdvfIIDtFtgP6sXDmqmVtA00NkbHxGV2")
const router =require("express").Router()


//const stripe = Stripe(process.env.STRIPE_KEY);


router.post("/payment", (req, res)=>{
    //await stripe.charges.create({
        // console.log("TOKEN "+req.body.token);
    return stripe.charges.create({

            source:req.body.tokenId,
            amount: req.body.amount,
            currency: "usd"
        },
        (stripeErr, stripeRes)=>{
            if(stripeErr){
                console.log("Many Errrors")
                res.status(500).json("Error h"+stripeErr)
            }else{
                res.status(200).json(stripeRes)
            }
        }
        )
    })



module.exports = router;