import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li><Link to="/" className="nav-link"> Home </Link></li>
                <li><Link to="/Login" className="nav-link">Login</Link></li>
            </ul>
            </nav>
            <hr />
        </header>
    )
}
