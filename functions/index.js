const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IHHPrAr1SCEs9Xzk0Fnx9BzF4kDug6EVJsbJr3YPchXkajc3jI3d8qIFb0HSRsl6lwJEdj13VqiGE9tnpX3Ul3i001F4x3AEv");

// - API config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send("Hello World"));
// app.get('/test', (request, response) => response.status(200).send("Hello TEST"));

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log("Received Payment Request for amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// - Listen comand
exports.api = functions.https.onRequest(app);
