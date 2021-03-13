import React from 'react';
import { Link } from 'react-router-dom';

const MenuLinks = ({ rockets, toggleMenu }) =>
    rockets.map(rocket => (
        <div key={rocket.name} className="nav__link">
            <Link onClick={() => toggleMenu(false)} to={`/rocket/${rocket.id}`} className="m-0">
                {rocket.name.toUpperCase()}
            </Link>
        </div>
    ));

export default MenuLinks;
