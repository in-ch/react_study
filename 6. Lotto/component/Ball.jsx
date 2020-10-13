const { useEffect } = require('react');
const React = require('react');
const memo = require('react');
const { useState, useRef, Component } = React;

function settingBackground(value) {
    if(value <= 10){
        return 'red';
    } else if(value <= 20) {
        return 'orange';
    } else if(value <= 30) {
        return 'yellow';
    } else if(value <= 40) {
        return 'blue';
    } else {
        return 'purple';
    }
}

const Ball = ({number}) => {
    let { number } = number;
    let background = settingBackground(number);

    return (
        <>
            <div className='ball' style={{ background: ` ${background} 0`}} >
                {number}
            </div>
        </>
    );
}

module.exports = Ball;