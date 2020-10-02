//const React = require('react');
//const { useState, useRef, Component } = React;

import React, { Component } from 'react';

function getNumbers() {
    // 숫자 4개를 랜덤하게 겹치지 않게 뽑는 함수
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        anwser: getNumbers(),
        try: [],
    };
    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit= {this.onSubmitForm}>
                    <input maxlength= {4} value= {this.state.value} onChange= {this.onChangeInput} />
                </form>
                <div>시도: {this.state.try.length}</div>
                <ul>
                    {['','','','',''].map(()=> {
                        return (
                            <li>like</li>
                        );
                    })}
                </ul>
            </>
        )
    }
}

export default NumberBaseball;