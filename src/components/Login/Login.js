import React, { useState } from 'react';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import YellowButton from '../YellowButton/YellowButton';
import { auth } from '../../firebase';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    // console.log("[ Login ]: API KEY = ", process.env.REACT_APP_FIREBASE_API_KEY);

    function handleSignIn(e) {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    function handleCreateAccount(e) {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword()
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="Login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon logo"
                    className = "login-logo" />
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />

                    <YellowButton text="Sign In" clicked={handleSignIn} />
                    {/*<button className="sign-in-btn">Sign In</button>*/}
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="create-account-btn" onClick={handleCreateAccount}>Create your Amazon Account</button>
            </div>
        </div>
    )
}
