import React from 'react';
import './NavShoppingBasket.scss';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useMyAppStateContext } from '../../../../context/AppStateContext';

export default function ShoppingBasket(props) {
    const [state] = useMyAppStateContext();
    // console.log("[ NavShoppingBasket ]: state = ", state);

    return(
        <div className="NavShoppingBasket">
            <ShoppingBasketIcon />
            <span className="basket-count line-two"> {state.basket.length}</span>
        </div>
    )
}
