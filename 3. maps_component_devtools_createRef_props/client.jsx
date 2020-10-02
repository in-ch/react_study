const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const NumberBaseball = require('./component/NumberBaseball');

//const Hot = hot(NumberBaseball); // 이렇게 하면 수정 사항이 있으면 알아서 바꿔줌 

ReactDom.render(<NumberBaseball />, document.querySelector('#root'));