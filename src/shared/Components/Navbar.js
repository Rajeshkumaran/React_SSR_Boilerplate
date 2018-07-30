import React, { Component } from "react";
import {BrowserRouter,StaticRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import Aboutus from './About_us';

export default class Navbar extends React.Component {

    // componentDidMount(){
    //     console.log('componentDidMount called')
    //     // fetch('https://jsonplaceholder.typicode.com/posts/10').then(res=>res.json()).then(data=>console.log(data))
    // }

    render() {
        console.log('navbar called in server')
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

