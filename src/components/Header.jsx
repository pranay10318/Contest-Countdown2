import React from 'react';

function Header() {
    return (
        <header>
            <nav className="header">
                <img src="./images/logo.png" height="100%" className="header-logo" alt="Logo" />
                <h1 style={{ fontSize: "200%", fontFamily: "arial", fontWeight: "bold" }}>Contest Countdown</h1>
                <ul className="header-list">
                    <li className="list-item">About Us</li>
                    <li className="list-item">Contact Us</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
