import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav mr-auto">
                    <li><Link to="/" className="nav-link"> Home </Link></li>
                    <li><Link to="/Login" className="nav-link">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}
