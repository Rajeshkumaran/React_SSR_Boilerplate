import React, { Component } from "react";
import {basename,join} from 'path';
import fs from 'fs';

// console.log(stylesheet);
const style = fs.readFileSync(
  join(__dirname,'./app.css'),
  'utf-8',
);
export default class App extends Component {
  

  render() {
    return (
      <html>
        <head>
          <style dangerouslySetInnerHTML={{__html:style}}/>
        </head>
      <div>
       <h1>Hi</h1>
       <img id='logo' src='/assets/home.png'/>
     
      </div>
      </html>
    );
  }
}
