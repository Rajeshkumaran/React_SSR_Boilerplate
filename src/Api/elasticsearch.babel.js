// All subsequent files required by node with the extensions .es6, .es, .jsx and .js will be transformed by Babel.
const babelRegister=require('babel-register');
let options = {
    plugins : ['transform-async-to-generator']
  };
require('babel-polyfill');
  // Register plugin for runtime compilation
babelRegister(options);
// Server Driver Code, everything from here on can use all the super future ES6 features!
module.exports = require('./elasticsearch_query.js');
