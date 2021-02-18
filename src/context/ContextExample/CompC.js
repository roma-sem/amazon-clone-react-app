import React, {useContext} from 'react'
import {CounterContext} from './Home';

function CompC() {
    const countContext = useContext(CounterContext);
    console.log("countContext = ", countContext);

    return (
        <div>
            <strong>Finally, CompC :)</strong>
            <br />
            <br />
            <button onClick={() => countContext.countDispatch({ type: 'increment', value: 1 })}>Increment 1</button>
            <button onClick={() => countContext.countDispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
            <button onClick={() => countContext.countDispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CompC
