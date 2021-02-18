import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import YellowButton from '../../YellowButton/YellowButton';
import { useMyAppStateContext } from '../../../context/AppStateContext';
import { getBasketTotal } from '../../../context/reducer';
import { useHistory } from 'react-router-dom';

export default function Subtotal() {
    const [{ basket }] = useMyAppStateContext();
    // console.log("[ Subtotal ]: basket = ", basket);
    const history = useHistory();

    function handleClick() {
        history.push("/payment");
    }

    return (
        <div className="Subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{ value }</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
            {/*<button>Proceed to Checkout</button>*/}
            <YellowButton text="Proceed to Checkout" clicked={handleClick} />
        </div>
    )
}
