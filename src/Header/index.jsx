import React from 'react';
import "./styles/index.css";

function Header() {
    return (
        <div className="header">
            <div className="text">
                <a>Автостанція</a>
            </div>
            <div className="headerAdress">вул. Курчатова, 22</div>
            <div className="headerPhone">тел. +380966279281</div>
            <div className="headerAbout">
                Інформація про розклад руху автобусів та його зміни.
            </div>
        </div>
    );
}

export default Header;