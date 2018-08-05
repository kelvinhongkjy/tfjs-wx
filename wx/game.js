import './js/libs/weapp-adapter'
import './js/libs/symbol'

import Main from './js/main'

new Main()

window.location.search = window.location.search || '?tfjsflags=WEBGL_VERSION:1,WEBGL_RENDER_FLOAT32_ENABLED:true';
console.log(window.location);

// Use require() instead of import to initialize tfjs
// after the flags above are set.
var tf = require('./tf.min.js');
console.log(tf);
