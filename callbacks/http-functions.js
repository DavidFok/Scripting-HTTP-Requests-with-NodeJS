var https = require('https');

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


module.exports = {
  getHTML: getHTML
}