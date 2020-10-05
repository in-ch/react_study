const React = require('react');

const Try = (tryInfo) => {
    return (
        <li>
            <div>
                {tryInfo.v}
            </div>
        </li>
    )
}

module.exports = Try;