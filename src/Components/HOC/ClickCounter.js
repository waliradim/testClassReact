import React from 'react'
import withCounter from './withCounter';

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>Click {count} time</button>
        </div>
    )
}
export default withCounter(ClickCounter);