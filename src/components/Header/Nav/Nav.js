import React from 'react';
import './Nav.scss';
import NavShoppingBasket from './NavShoppingBasket/NavShoppingBasket';
import { Link } from 'react-router-dom';
import { useMyAppStateContext } from '../../../context/AppStateContext';
import { auth } from '../../../firebase';

export default function Nav() {
    const [{ user }] = useMyAppStateContext();
    // console.log("[ Nav ]: user = ", user );

    function handleAuthentication() {
        if (user) {
            auth.signOut();
        }
    }

    return(
        <div className="Nav">
            <Link to={!user && "/login"}>
                <div className="nav-option" onClick={handleAuthentication}>
                    <span className="line-one">{user ? user.email : "Hello Guest" } </span>
                    <span className="line-two">{user ? "Sign Out" : "Sign In"}</span>
                </div>
            </Link>

            <Link to="/orders">
                <div className="nav-option">
                    <span className="line-one">Returns</span>
                    <span className="line-two">& Orders</span>
                </div>
            </Link>

            <div className="nav-option">
                <span className="line-one">Your</span>
                <span className="line-two">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="nav-option">
                    <NavShoppingBasket />
                </div>
            </Link>
        </div>
    );
}
