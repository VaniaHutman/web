import React from 'react';
import "./styles/index.css";

function Header() {
    return (
        <div className="navBar">
            <a href="/"> Головна </a>
            <a href="/contacts"> Контакти </a>
            <a href="/history" > Історія сайту </a>
            <a href="/add" > [Add directions] </a>
        </div>
    );
}

export default Header;