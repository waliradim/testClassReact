import React, { Component } from 'react'


const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleName[scale]}</legend>
            <input
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)} />
        </fieldset>
    )
}

