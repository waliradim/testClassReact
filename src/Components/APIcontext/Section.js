import React from 'react'
import Content from './Content'

export default class Section extends React.Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <div>
                <h1>This Section Component Radim Wali Mahmud</h1>
                <Content />
            </div>
        )
    }
}
