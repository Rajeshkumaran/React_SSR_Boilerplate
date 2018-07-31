import React from 'react';
import ReactDOM from 'react-dom';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter,Link,Route} from 'react-router-dom';
 import Navbar from '../shared/Components/Navbar';
 import { combineReducers } from 'redux';
import MainReducer from '../shared/Reducers/MainReducer';
import PageHitReducer from '../shared/Reducers/PageHitReducer';
 const AllReducers = combineReducers({
  MainReducer : MainReducer,
  PageHitReducer : PageHitReducer
})
const store = createStore(AllReducers,window.__PRELOADED_STATE__)
 ReactDOM.hydrate(
 <Provider store={store}>
  <BrowserRouter>
  <Navbar/>
  </BrowserRouter>
  </Provider>
    , document.getElementById('root'));