import React, { Component } from "react";
import {BrowserRouter,StaticRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import Aboutus from './About_us';
import Login from './Login_UI';
import Love from './Likes';
require('../Styles/NavBar.web.css')

export default class Navbar extends React.Component {

    // componentDidMount(){
    //     console.log('componentDidMount called')
    //     // fetch('https://jsonplaceholder.typicode.com/posts/10').then(res=>res.json()).then(data=>console.log(data))
    // }

    render() {
        console.log('navbar called in server')
      
        return (
        
                <div className='NavBar'>
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li id='LoginLi'><Link to='/Login'>Login</Link></li>
                        <li id='SignupLi'><Link to='/Signup'>Sign up</Link></li>
                        <li id='StarLi'><Link to='/Loves'><img style={{width:'20px',height:'20px',position:'relative'}} src='/assets/images/heart.png'/></Link></li>
                      
                    </ul>
                    <div className='ComponentDisplay'>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/About' component={Aboutus} />
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/Loves' component={Love}/>
                    </div>
                </div>
        
        
        )
    }
}

