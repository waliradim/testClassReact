import React from 'react'

export default function BoilingVerdic(props) {
    if (props.celsius > 100) {
        return (

            <h1> The Water would be Boil</h1>

        )
    }
    return <h3>The Water would not be Boil</h3>
}
