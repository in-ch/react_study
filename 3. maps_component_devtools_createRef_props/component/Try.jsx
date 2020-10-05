const React = require('react');

const Try = (tryInfo) => {
    return (
        <>
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
                
            </li>
        </>
    )
}

module.exports = Try;