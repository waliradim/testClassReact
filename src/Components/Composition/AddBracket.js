import React, { Component } from 'react'

export default class AddBracket extends Component {
    addBracket = (text) => ` [${text}] `;
    render() {
        return this.props.children({ addBracket: this.addBracket });
    }
}
