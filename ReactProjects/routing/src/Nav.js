import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {

    const style = {
        color: 'white',
        textDecoration:'none'
    };
    return (
        <div className="Nav">
            <nav>
                <Link style={style} to='/'>
                    <h3>Logo</h3>
                </Link>
                <ul className="navlinks">
                    <Link style={style} to='/about'>
                        <li>About</li>
                    </Link>
                    <Link style={style} to='/shop'>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;