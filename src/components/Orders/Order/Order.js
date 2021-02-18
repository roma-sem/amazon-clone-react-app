import React from 'react';
import './Order.scss';
import moment from 'moment';
import CheckoutShoppingItem from '../../CheckoutShoppingItem/CheckoutShoppingItem';
import CurrencyFormat from 'react-currency-format';

export default function Order({ order }) {
    return (
        <div className="Order">
            <h2>Order</h2>
            <p className="order-date">{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order-id"><b>ID:</b> <small>{order.id}</small></p>

            {order.data.basket?.map((item, i) => (
                <CheckoutShoppingItem
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    key={`orderhistoryitem${i}`}
                    hideButton={true}
                    />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order-total">Order total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
        </div>
    )
}
