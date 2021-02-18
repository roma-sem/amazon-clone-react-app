import React from 'react';
import './ShoppingItem.scss';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import YellowButton from '../../YellowButton/YellowButton';
import { useMyAppStateContext } from '../../../context/AppStateContext';

export default function ShoppingItem({ id, title, image, price, rating }) {
    const [state, dispatch] = useMyAppStateContext();
    // console.log("[ ShoppingItem ]: state = ", state);

    function handleClick() {
        // console.log("Basket Click TEST");
        dispatch({
            type: 'ADD_TO_BASKET',
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
        <div className="ShoppingItem">
            <div className="inner-container">
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
                <img src={image} alt="product"/>

                <YellowButton
                    text="Add To Basket"
                    clicked={handleClick} />
            </div>
        </div>
    )
}
