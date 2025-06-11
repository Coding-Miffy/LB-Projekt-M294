import React from 'react'

const Button = ({ text, onButtonClick, className }) => {
    return (
        <button
            onClick={onButtonClick}
            className={`button ${className || ""}`}
        >
            {text}
        </button>
    );
};

export default Button;