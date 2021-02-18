import React, { useState, useEffect } from 'react';
import './Payment.scss';
import CheckoutShoppingItem from '../CheckoutShoppingItem/CheckoutShoppingItem';
import { useMyAppStateContext } from '../../context/AppStateContext';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/reducer';
import axios from '../../axios';
import { db } from '../../firebase';


export default function Payment() {
    const [{ basket, user }, dispatch] = useMyAppStateContext();
    // console.log("[ Payment ]: basket = ", basket);
    // console.log("[ Payment ]: user = ", user);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const getClientSecret = async () => {
            const  response = await axios({
                method: "POST",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    // console.log("[ Payment ]: THE SECRET IS >>> ", clientSecret);
    // console.log("[ Payment ]: db = ", db);
    // console.log("[ Payment ]: user = ", user);

    async function handleSubmit(e) {
        // console.log("[ Payment ]: handleSubmit, e = ", e);
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            })
            .then(({ paymentIntent }) => {
                // paymentIntent === payment confirmation

                db
                    .collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    })

                setSucceded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET'
                });

                history.replace("/orders");
            })
    }

    function handleChange(e) {
        // console.log("[ Payment ]: handleChange, e = ", e);
        // e.empty === fasle if at least one number was typed in
        setDisabled(e.empty);
        setError(error ? error.message : "");
    }

    return (
        <div className="Payment">
            <div className="payment-container address">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-details">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Philadelphia, PA</p>
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-details">
                        {basket?.map( (item, i) => {
                            return (
                                <CheckoutShoppingItem
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                    key={`checkoutproduct${i}`}
                                    />
                            )
                        })}
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment-priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                            </div>

                            <button
                                className="buy-button"
                                disabled={processing || disabled || succeded}>
                                <span>{processing ? <span>Processing</span> : "Buy Now"}</span>
                            </button>

                            {/*Errors:*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
