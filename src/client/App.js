import React, { Component } from "react";
import {basename,join} from 'path';
import fs from 'fs';
import {Provider} from 'react-redux';
import Navbar  from '../shared/navbar';


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
          <script src='/test/bundle.js'></script>
          {/* <style dangerouslySetInnerHTML={{__html:style}}/> */}
        </head>
      <div>
       <h1>Hi</h1>
       <img id='logo' src='/assets/home.png'/>
       <Navbar/>
      </div>
      </html>
    );
  }
}
