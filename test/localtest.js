var jsdom   = require("jsdom").jsdom;
document    = jsdom('');
window      = document.createWindow();
HTMLElement = window.HTMLElement;
require('./classlist')
require('./spec.js')