import React from 'react';
import './BasketItems.scss';
import CheckoutShoppingItem from '../../CheckoutShoppingItem/CheckoutShoppingItem';
// import FlipMove from 'react-flip-move';

export default function ShoppingList ({ basket }) {
    // console.log("[ BasketItems ]: basket = ", basket);

    return (
        <div className="BasketItems">
            {/*<FlipMove>*/}
                {basket.map((item, i) => {
                    return (
                        <CheckoutShoppingItem
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            key={`product${i}`}
                            />
                    )
                })}
            {/*</FlipMove>*/}
        </div>
    )
}
