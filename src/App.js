import React, { useEffect } from 'react';
import './App.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import { useMyAppStateContext } from './context/AppStateContext';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
    process.env.REACT_APP_STRIPE_API_KEY
);

// console.log("typeof(process.env.REACT_APP_STRIPE_API_KEY) = ", typeof(process.env.REACT_APP_STRIPE_API_KEY))

function App() {
    const [state, dispatch] = useMyAppStateContext();

    useEffect(() => {
        auth.onAuthStateChanged( (authUser) => {
            // console.log("[ App ]: authUser = ", authUser);
            if (authUser) {
                // user just logged in / user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })

            } else {
                // user just logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [dispatch]);

    return (
            <HashRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" exact>
                            <Header />
                            <Home />
                        </Route>

                        <Route path="/login" exact component={Login} />

                        <Route path="/checkout" exact>
                            <Header />
                            <Checkout />
                        </Route>

                        <Route path="/payment" exact>
                            <Header />
                            <Elements stripe={promise}>
                                <Payment />
                            </Elements>
                        </Route>

                        <Route path="/orders" exact>
                            <Header />
                            <Orders />
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
    );
}

export default App;
