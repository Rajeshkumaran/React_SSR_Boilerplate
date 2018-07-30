import React from 'react'
import {renderToString} from 'react-dom/server' 
import App from './App'
const express = require('express');
const os = require('os');
import fs from 'fs';

const app = express();

// app.use(express.static('dist'));
app.use('/assets',express.static('assets'));
app.use('/files',express.static('src/client'))
app.get('/',(req,res)=>{


    
    const html = renderToString(<App/>)
    
    res.send(`<!DOCTYPE html>${html}`)

})
app.use('/test',express.static('build'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(3010, () => console.log('Listening on port 3010!'));
