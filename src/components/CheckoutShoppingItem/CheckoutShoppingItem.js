import React from 'react';
import './CheckoutShoppingItem.scss';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import YellowButton from '../YellowButton/YellowButton';
import { useMyAppStateContext } from '../../context/AppStateContext';

export default function CheckoutShoppingItem({ id, title, image, price, rating, hideButton }) {
    const [{ basket, user }, dispatch] = useMyAppStateContext();
    // console.log("[ CheckoutShoppingItem ]: basket = ", basket);
    // console.log("[ CheckoutShoppingItem ]: user = ", user);

    function handleClick(index) {
        // console.log("[ BasketShoppingItem ]: CLIKED item id: ", id);
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return(
        <div className="CheckoutShoppingItem">
            <div className="inner-container">
                <img src={image} alt="product"/>

                <div className="item-info">
                    <p className="product-title">
                        {title}
                    </p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product-rating">
                        {
                            (rating && rating > 0) ? Array(rating).fill().map( (_, i) =>
                                <StarRoundedIcon key={`fullstar${i}`} />
                            ) : null
                        }
                        {
                            (rating && rating < 5) ? Array(5 - rating).fill().map( (_, i) =>
                                <StarBorderRoundedIcon key={`emptystar${i}`} />
                            ) : null
                        }
                    </div>

                    {!hideButton && (
                        <YellowButton
                            text="Remove from basket"
                            clicked={handleClick} />
                    )}
                </div>
            </div>
        </div>
    )
}
