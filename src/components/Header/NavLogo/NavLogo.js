import React from 'react';
import './NavLogo.scss';
import logo from '../../../assets/images/amazon-nav-logo.png';
import { Link } from 'react-router-dom';

export default function NavLogo () {
    return (
        <React.Fragment>
            <Link to="/">
                <img className="NavLogo-img" src={logo} alt="logo" />
            </Link>
        </React.Fragment>
    );
}
