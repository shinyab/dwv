
var fs = require('fs');

// namespaces
var dwv = dwv || {};
dwv.vuno = dwv.vuno || {};
/** @namespace */
dwv.vuno.base = dwv.vuno.base || {};

dwv.vuno.load = function (url) {

  fs.readFile(url, 'utf8', function(err, contents) {

    console.log(contents);
  });
};
