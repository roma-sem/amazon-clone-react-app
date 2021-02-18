import React from 'react';
import './YellowButton.scss'

export default function YellowButton({ clicked, text, disabled }) {
    return (
        <React.Fragment>
            <button
                className="YellowButton"
                onClick={clicked}
                >
                    {text}
            </button>
        </React.Fragment>
    )
}
