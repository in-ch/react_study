const React = require('react');
const { useState, useRef, Component } = React;

const Try = (tryInfo) => {
    return (
        <li key={tryInfo.v + 12412}>
            <div>
                {tryInfo.v}
            </div>
        </li>
    )
}

module.exports = Try;