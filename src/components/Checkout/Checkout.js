import React, {     useEffect } from 'react';
import './Checkout.scss';
import BasketItems from './BasketItems/BasketItems';
import Subtotal from './Subtotal/Subtotal';
import { useMyAppStateContext } from '../../context/AppStateContext';

export default function Checkout() {
    const [{ basket, user }] = useMyAppStateContext();
    // console.log("[ Checkout ]: basket = ", basket);
    // console.log("[ Checkout ]: user = ", user);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="Checkout">
            <div className="checkout-left-col">
                <img className="checkout-ad-img"
                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                     alt=""
                     />
                 <div className="basket-title">
                     {/*<h3>{user ? `Hello, ${user.email}` : "Hello, Guest"}</h3>*/}
                     <h3>Hello, {user?.email}</h3>
                     <h2>Your Shopping Basket</h2>
                 </div>
                <BasketItems basket={basket} />
            </div>

            <div className="checkout-right-col">
                <Subtotal />
            </div>
        </div>
    )
}
