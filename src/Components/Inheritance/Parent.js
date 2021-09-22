import React, { Component } from 'react'

export default class Parent extends Component {
    addText = (text, word) => `${word} ${text} ${word}`;
    render(override) {
        console.log('parent')
        let text = 'hello it call from Parent'
        if (override) {
            text = override;
        }
        return (
            <div>
                {text}
            </div>
        )
    }
}
