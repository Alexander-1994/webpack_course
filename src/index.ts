// This code is an example

import { calc } from './calc';
import './style.sass';

const hello = document.createElement('p');
const result = document.createElement('p');

hello.innerHTML = 'Hello, webpack!';
hello.classList.add('hello');

result.innerHTML = `Function "calc" returned: ${calc(5, 10)}`;
result.classList.add('text');

document.body.append(hello, result);
