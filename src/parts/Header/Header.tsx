import React from 'react';
import SCSS from './Header.module.scss';

const Header = () => {
    return (
        <header className={SCSS.Container}>
            <div className={SCSS.Container_Inner__left}>
                <h1>My Application</h1>
            </div>
            <nav className={SCSS.Container_Inner__center}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className={SCSS.Container_Inner__right}>a</div>
        </header>
    );
};

export default Header;