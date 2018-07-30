import React, { Component } from "react";
import {basename,join} from 'path';
import fs from 'fs';
import {Provider} from 'react-redux';
import Navbar  from '../shared/Components/Navbar';
import  {StaticRouter} from 'react-router-dom';


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
          {/* <style dangerouslySetInnerHTML={{__html:style}}/> */}
        </head>
      <div id='root'>
      <StaticRouter>
         <Navbar/>
      </StaticRouter>
      </div>
      </html>
    );
  }
}
