import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
const express = require('express');
const os = require('os');
import fs from 'fs';
var cors = require('cors');
import { StaticRouter } from 'react-router-dom';
import Navbar from '../shared/Components/Navbar';
import fetch from 'isomorphic-fetch';
import routes from '../Routes/routes';
import {matchPath} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {setInitialState} from '../shared/Reducers/MainReducer';
import MainReducer from '../shared/Reducers/MainReducer';
import PageHitReducer from '../shared/Reducers/PageHitReducer';
import LoginReducer from '../shared/Reducers/LoginReducer';
import { combineReducers } from 'redux';
import  bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
const AllReducers = combineReducers({
    MainReducer : MainReducer,
    PageHitReducer : PageHitReducer,
    LoginReducer : LoginReducer
})

app.use('/assets', express.static('assets'));
app.use('/test', express.static('build'));

app.get("*", (req, res) => {

    console.log('Req  params',req.url,req.params,req.query);
   var promise = routes.find((route)=>{
       console.log('route',route)
       return route.path  == req.params[0]
   });

   var resolved = promise.actiontype == 'LOGIN_AUTHENTICATION'? promise.fetch_Page(req.query) : promise.fetch_Page();
   resolved.then((data)=>{
       
    const store = createStore(AllReducers)
    store.dispatch({type:promise.actiontype,payload:data})
    const preloaded_State = store.getState();
    var test = JSON.stringify(preloaded_State).replace(/</g, '\\u003c');
    console.log(test)
    console.log(store.getState())
    const html = renderToString(<Provider store={store}><App url={req.url} initial_data={preloaded_State}/></Provider> )
    //     res.send(`<html>
    //     <head>
    //       <script src='/test/bundle.js' defer></script>
    //       <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloaded_State).replace(/</g, '\\u003c')}</script>
    //     </head>
    //     <body>
    //       <div id='root'>
    //       ${html} 
    //      </div>
    //   </body>
    //   </html>`)
     res.send(`${html}`)

   })
 


})

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(3010, () => console.log('Listening on port 3010!'));
