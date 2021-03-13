import React from 'react';
// styles
import './style.scss';

const MenuButton = ({ isMenuOpen, toggleMenu }) => (
    <button type="button" onClick={() => toggleMenu(!isMenuOpen)} className="nav__button">
        <div className={`nav__button__icon ${isMenuOpen ? 'open ' : ''}`}></div>
    </button>
);

export default MenuButton;
