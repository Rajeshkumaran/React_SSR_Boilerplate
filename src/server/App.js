import React, { Component } from "react";
import {basename,join} from 'path';
import fs from 'fs';
import {Provider} from 'react-redux';
import Navbar  from '../shared/Components/Navbar';
import  {StaticRouter} from 'react-router-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from '../shared/Components/Home';
import Aboutus from '../shared/Components/About_us';
import serialize from 'serialize-javascript';

//console.log(styles);
const style = fs.readFileSync(
  join('/home/rajesh_k/Documents/simple-react-full-stack/src/shared/Styles/NavBar.web.css'),
  'utf-8',
);
var test;
export default class App extends Component {
  
  


  render() {

    test = JSON.stringify(this.props.initial_data).replace(/</g, '\\u003c')
    return (
      <html>
        <head>
          <style dangerouslySetInnerHTML={{__html:style}}></style>
          <script src='/test/bundle.js' defer></script>
          <link rel="shortcut icon" href="/test/favicon.ico"/>
          {/* <link rel='stylesheet' type='text/css' href='/test/mobile.css' media='screen and (width="720px")'/> */}
          <link rel='stylesheet' type='text/css' href='/test/web.css'   />
          <script dangerouslySetInnerHTML={{__html: `window.__PRELOADED_STATE__ = ${JSON.stringify(this.props.initial_data)}`}}></script>
        </head>
        <body>
          <div id='root'>
          <StaticRouter location={this.props.url} context={{}}>
            <Navbar/>
        </StaticRouter> 
         </div>
      </body>
      </html>
    );
  }
}
