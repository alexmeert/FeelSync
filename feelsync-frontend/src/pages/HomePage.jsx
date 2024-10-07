import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <div className="homepage">
            <h1>Welcome to FeelSync</h1>
            <p>Track your mood daily and see how you're doing over time</p>
            <Link to="/login">
                <button>Get Started</button>
            </Link>
        </div>
    );
}

export default HomePage;