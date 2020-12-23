const React = require('react');
const { useState, useRef, Component } = React;
import Td from './Td';

const Tr = ({ rowData }) => {

    return (
            <tr>
                {
                    Array(rowData.length).fill().map((td) => (<Td>{''}</Td>))
                }
            </tr>
        )
}

export default Tr;