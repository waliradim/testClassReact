import React, { Component } from 'react'

export default class AddText extends Component {
    addText = (text, word) => `${word} ${text} ${word}`;
    render() {
        return this.props.children({ addText: this.addText });
    }
}
