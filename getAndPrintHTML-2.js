var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML (options) {
  https.get(options, function (response) {
    response.setEncoding('utf8');

    var dataList = [];
    response.on('data', function (data) {
      dataList.push(data);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(dataList.join(''));
    });
  });
}

getAndPrintHTML (requestOptions);