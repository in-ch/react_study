const React = require('react');
const { Component } = React;

class GuGuDan extends React.Component {
    state = {
        text: 'Hello, webpack'
    };

    render() {
        return <h1>{this.state.text}</h1>
    }
}

module.exports = GuGuDan;