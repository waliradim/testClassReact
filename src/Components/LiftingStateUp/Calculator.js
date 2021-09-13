import React, { Component } from 'react'
import BoilingVerdic from './BoilingVerdic';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from './LogicFunction';



export default class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handelChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        })
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handelChange} />

                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handelChange} />

                <BoilingVerdic
                    celsius={parseFloat(temperature)} />
            </div>
        )
    }
}
