import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useMyAppStateContext } from '../../context/AppStateContext';
import Order from './Order/Order';
import './Orders.scss';

export default function Orders() {
    const [{ user }] = useMyAppStateContext();
    const [orders, setOrders] = useState([]);

    // console.log("[ Orders ]: db = ", db.collection('users').doc(user?.uid));

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data:  doc.data()
                })))
                ))
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className="Orders">
            <h1>Your Orders</h1>

            <div className="all-orders">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}
