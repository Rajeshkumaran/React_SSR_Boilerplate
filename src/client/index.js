import React from 'react';
import ReactDOM from 'react-dom';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter,Link,Route} from 'react-router-dom';
 import Navbar from '../shared/Components/Navbar';
 import { combineReducers } from 'redux';
import MainReducer from '../shared/Reducers/MainReducer';
 const AllReducers = combineReducers({
  MainReducer : MainReducer
})
const store = createStore(AllReducers)
 ReactDOM.hydrate(
  <BrowserRouter>
  <Navbar/>
  </BrowserRouter>

    , document.getElementById('root'));