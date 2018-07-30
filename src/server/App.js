import React, { Component } from "react";
import {basename,join} from 'path';
import fs from 'fs';
import {Provider} from 'react-redux';
import Navbar  from '../shared/Components/Navbar';
import  {StaticRouter} from 'react-router-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from '../shared/Components/Home';
import Aboutus from '../shared/Components/About_us';


//console.log(styles);
const style = fs.readFileSync(
  join(__dirname,'./app.css'),
  'utf-8',
);
export default class App extends Component {
  
  


  render() {
    return (
      <html>
        <head>
          <script src='/test/bundle.js' defer></script>
        </head>
        <body>
          <div id='root'>
          <StaticRouter location={this.props.url} context={{}}>
            <Navbar data={this.props.data}/>
        </StaticRouter> 
         </div>
      </body>
      </html>
    );
  }
}
