import React, { Component } from "react";
import {BrowserRouter,StaticRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import Aboutus from './About_us';

export default class Navbar extends React.Component {

    render() {
        return (
        
                <div>
                    <ul>
                        <Link to='/Home'>Home</Link>
                        <Link to='/About'>About</Link>
                    </ul>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/About' component={Aboutus} />
                </div>
        
        
        )
    }
}

