import React from 'react';
import { render } from 'react-dom';
import ssr from './utilities/ssr/index';
import Input from './components/Input/index';

if (typeof document === 'object') {
  render(Input, document.getElementById('root'));
}

ssr.transforms.push(ssr.insertBefore(<h1>Hello 2</h1>, '#root'));

export default ssr;
