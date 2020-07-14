const path = require('path');
var pathObject = path.parse(__filename);
console.log(pathObject);
console.log(pathObject.base);