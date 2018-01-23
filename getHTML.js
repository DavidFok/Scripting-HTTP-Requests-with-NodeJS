var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

var dataList = [];

var getHTML = function (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      dataList.push(data);
    });

    response.on('end', function() {
      dataList.join('');
      callback(dataList.toString());
    });
  });
}

var printIt = function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printIt);

