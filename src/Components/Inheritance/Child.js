import React, { Component } from 'react'
import Parent from './Parent'

export default class Child extends Parent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        console.log('child')
        let word = this.addText('I am from Child ', 'Hello');
        return (
            <div>

                {super.render(word)}
            </div>
        )
    }
}
