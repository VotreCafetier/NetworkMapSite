import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from "./component/Home";
import Footer from './component/Footer';

function PrivateRoute(props) {
    return (
        <>
        {props.isLoggedIn ? (
            <Home token={props.token}/>
            // <Footer/>
        ) : (
            <Redirect to={{ pathname: '/Login' }} />
        )}
        </>
    )
}

export default PrivateRoute

