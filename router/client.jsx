const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

import hots from './component/router';
const Hot = hot(hots); // 이렇게 하면 수정 사항이 있으면 알아서 바꿔줌 

ReactDom.render(<Hot />, document.querySelector('#root'));