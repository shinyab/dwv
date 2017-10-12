var fs = require('fs');

var dwv = require('../../build/dist/dwv');
console.log('Do');
var data = fs.readFileSync('/Users/shinyab/bluehack/2017/development/vuno/vuno/tests/IM-0001-0031.dcm');

console.log(typeof dwv);
console.log(typeof dwv.dicom);

var arrayBuffer = new Uint8Array(data).buffer;
var dicomParser = new dwv.dicom.DicomParser();
dicomParser.parse(arrayBuffer);
var tags = dicomParser.getDicomElements();
console.log('Patent Name' + tags.getFromName('PatientName'));

// var pixeldata = tags.getFromName('PixelData');
