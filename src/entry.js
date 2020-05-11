require("@babel/register")({ 
    presets: ["@babel/preset-env"]
});
require("babel-polyfill"); //needed to ensure async/await will work with babel
/* Use classical node approach to import index.js (the application’s entry point).*/
module.exports = require('./index2.js');