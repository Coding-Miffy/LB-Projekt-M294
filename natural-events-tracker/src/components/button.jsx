import React from 'react'

const Button = ({ text, onButtonClick, disabled = false, className }) => {
    return (
        <button
            onClick={onButtonClick}
            disabled={disabled}
            className={`button ${className || ""}`}
        >
            {text}
        </button>
    );
};

export default Button;