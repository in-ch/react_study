const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRelay = require('./component/WordRelay');

const Hot = hot(WordRelay); // 이렇게 하면 수정 사항이 있으면 알아서 바꿔줌 

ReactDom.render(<Hot />, document.querySelector('#root'));