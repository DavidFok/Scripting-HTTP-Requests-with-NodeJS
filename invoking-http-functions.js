var https = require('https');
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printIt = function printHTML (html) {
  console.log(html);
}

getHTML.getHTML(requestOptions, printIt);