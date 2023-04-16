import React from 'react'
import { Link } from "react-router-dom";

const CustomBtn = ({type, to, onClick, btnDisabled, title}) => {
    if (type === 'button') {
        return (
            <button
                onClick={onClick}
                type="button"
                className={`favorites__save ${btnDisabled ? 'btnDisabled' : ''}`}>
                {title}
            </button>
        )
    }
    return (
        <Link to={to}>Перейти к списку</Link>
    )
}

export default CustomBtn;