import React, { Component } from 'react'


const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default class TemperatureInput extends Component {

    handelChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}</legend>
                <input
                    value={temperature}
                    onChange={this.handelChange} />
            </fieldset>
        )
    }
}
