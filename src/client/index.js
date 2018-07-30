import React from 'react';
import ReactDOM from 'react-dom';
 import {hydrate} from 'react-dom';
// import Home from './Components/Home';
// import About from './Components/About_us';
import {BrowserRouter,Link,Route} from 'react-router-dom';
 import Navbar from '../shared/Components/Navbar'

 ReactDOM.hydrate(
   <BrowserRouter>
    <Navbar/>
  </BrowserRouter>
    , document.getElementById('root'));