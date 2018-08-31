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
import { matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import {setInitialState} from '../shared/Reducers/MainReducer';
import MainReducer from '../shared/Reducers/MainReducer';
import PageHitReducer from '../shared/Reducers/PageHitReducer';
import LoginReducer from '../shared/Reducers/LoginReducer';
import PersonalInfoReducer from '../shared/Reducers/PersonalInfoReducer';
import SentRequestReducer from '../shared/Reducers/SentRequestReducer';
import { combineReducers } from 'redux';
import bodyParser from 'body-parser';
import { resolve } from 'path';
const cookieparser = require('cookie-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use(cookieparser());
var uid = require('uid-safe');
var redis = require('redis');
var redis_client = redis.createClient();
redis_client.on('error', () => {
    console.log('Error on connecting to redis server');
})
redis_client.on('connect', () => {
    console.log('Connected to redis');
})

//test();


const AllReducers = combineReducers({
    MainReducer: MainReducer,
    PageHitReducer: PageHitReducer,
    LoginReducer: LoginReducer,
    SentRequestReducer: SentRequestReducer,
    PersonalInfoReducer : PersonalInfoReducer
})

app.use('/assets', express.static('assets'));
app.use('/test', express.static('build'));
app.post('/Search',(req,res)=>{
    fetch('http://localhost:1337/userinfo/?UserName='+req.body.UserName)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        res.send(data);
   
    }).catch(err=>console.log(err));
})
app.post('/PersonalInfo_Request',(req,res)=>{
    console
    fetch('http://localhost:3015/PersonalInfo_Handler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
        .then(res => res.json())
        .then((data) => {
            console.log('PersonalInfoRequest_Handle :', data)
            var Obj = [{
                UserName : data.UserName,
                MobileNumber : data.MobileNumber,
                MailId:data.MailId,
                DateOfBirth : data.DateOfBirth
            }]
            res.send(Obj)
        }).catch(error => error)
})
app.post('/PostRequest_Handle', (req, res) => {
    fetch('http://localhost:3015/PostRequest_Handler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
        .then(res => res.json())
        .then((data) => {
            console.log('PostRequest_Handle :', data)
            res.send({
                action: 'PostRequest_Done',
                status: 'Success'
            })
        }).catch(error => error)
})
app.post('/MyRequests_Data', (req, res) => {
    fetch('http://localhost:3015/MyRequests_DataHandler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
        .then(res => res.json())
        .then(data => {
            res.send(data)
        }).catch(error => error);

});
app.post('/LoginAuthenticate', (req, res) => {

    fetch('http://localhost:3015/LoginAuthenticator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    }
    )
        .then(response => response.json())
        .then((data) => {
            console.log('Data : ', data)
            console.log('Before setting cookie ---', new Date(Date.now()).toUTCString(), new Date(Date.now()));
            //   res.cookie('isAuthenticated', data.Authenticated, { expires: new Date(Date.now() + (24 * 60 * 60 * 5 * 1000)) })
            // res.cookie('UserId', data.UserId, { expires: new Date(Date.now() + (24 * 60 * 60 * 5 * 1000)) })
            if (data.Authenticated) {
                res.cookie('SessionID', req.cookies.SessionID, { expires: new Date(Date.now() + (24 * 60 * 60 * 5 * 1000)) })
                redis_client.hset(req.cookies.SessionID, 'UserId', data.UserId, redis.print);
                redis_client.hset(req.cookies.SessionID, 'MailId', data.MailId, redis.print);
            }
            else {
                console.warn('in /LoginAuthenticate', data.isAuthenticated)
            }
            res.send(data)
        })
        .catch((error) => error)



})
app.get('/Logout',(req,res)=>{
    redis_client.hdel(req.cookies.SessionID,"UserId",function(err,result){
        console.log("UserId delete operation : ",result)
    })
    redis_client.hdel(req.cookies.SessionID,"MailId",function(err,result){
        console.log("MailId delete operation : ",result)
    })
    res.cookie("SessionID",req.cookies.SessionID,{expires : new Date(Date.now()+(24*60*60*1*1000))})
    res.send("Successfully Logout");
})
app.get("*", (req, res) => {

    var UserId = null, Bool = false,isAuthenticated= false;
    console.log('Server log - Cookies : ', req.cookies);
    function SessionCheck() {
        
        if (req.cookies.SessionID) {
            console.log('Inside Sessioncheck if statement...')
            
            return new Promise(resolve =>{
               var test = redis_client.hgetall(req.cookies.SessionID, (error, result) => {
                    console.log('Result =====>', result);
                    result ? UserId = result.UserId ? result.UserId : null : UserId = null
                    resolve(UserId)
                })

                console.log('test : =======',test)
               
                
            })
        }
        else {
            var SessionID = uid.sync(18)
            console.log('SessionId : ', SessionID);
            redis_client.hset(SessionID, 'SessionID', SessionID, redis.print);
            res.cookie('SessionID', SessionID, { expires: new Date(Date.now() + (24 * 60 * 60 * 1 * 1000)) })

            return new Promise(resolve => resolve(null));
        }
    }

    const redisSession = SessionCheck();
    redisSession.then(() => {
        console.log('after redisSessionCheck ',UserId)
        const store = createStore(AllReducers)
        var promise = routes.find((route) => {
            // console.log('route',route)
            return route.path == req.params[0]
        });

        if (UserId) {
            console.log("Already Logged in User : ", UserId)
            isAuthenticated = true;
            Bool = true;
        }


        var resolved = promise.fetch_Page(UserId);


        resolved.then((data) => {

            console.log('Promise resolved ... ',isAuthenticated,UserId)
            store.dispatch({type:'LOGIN_AUTHENTICATION',payload:{isAuthenticated:isAuthenticated,UserId:UserId}})
            store.dispatch({ type: promise.actiontype, payload: data })
            console.log("data .......", data, 'Promise in server now :', promise.pagehit_action);
            store.dispatch({ type: promise.pagehit_action, payload: 1 })





            const preloaded_State = store.getState();
            //   console.log('PreLoaded state : ', preloaded_State)
            const html = renderToString(<App url={req.url} storedata={store} initial_data={preloaded_State} />)
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



})

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(3010, () => console.log('Listening on port 3010!'));
