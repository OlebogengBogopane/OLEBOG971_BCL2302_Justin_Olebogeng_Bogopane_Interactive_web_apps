//scripts.js

import {company} from './configuration.js';
import {year} from './configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;
console.log(message);

/**./ configuration.js
 *curly brackets
 * added console.log so that the message can run
 * 
 */