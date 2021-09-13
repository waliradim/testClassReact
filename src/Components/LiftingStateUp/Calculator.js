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
    handelCelsiusChange = (temperature) => {
        this.setState({
            scale: 'c',
            temperature
        })
    };

    handelFahrenheitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        })
    };

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handelCelsiusChange} />

                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handelFahrenheitChange} />

                <BoilingVerdic
                    celsius={parseFloat(temperature)} />
            </div>
        )
    }
}
