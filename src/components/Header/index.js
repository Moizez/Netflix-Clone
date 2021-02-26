import React from 'react';

import './style.css'

const Header = ({ bgHeader }) => {
    return (
        <header className={bgHeader && 'header--black'}>
            <div className="header--logo">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
            </div>
        </header>
    );
}

export default Header