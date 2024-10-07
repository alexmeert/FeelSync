// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ handleLogout }) {
    const handleNavLogout = () => {
        handleLogout(); // Call the handleLogout prop when logging out
    };

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mood-entry">Log Mood</Link></li>
                <li><Link to="/mood-history">Mood History</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li>
                    <button onClick={handleNavLogout}>Logout</button> {/* Logout button */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;