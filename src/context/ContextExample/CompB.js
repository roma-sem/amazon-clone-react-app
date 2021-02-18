import React, {useContext} from 'react'
import CompC from './CompC';
import {CounterContext} from './Home';

function CompB() {
    const countContext = useContext(CounterContext);
    console.log("[CompB]: countContext = ", countContext);
    return (
        <div>
            CompB
            
            <br />
            <button onClick={() => countContext.countDispatch({ type: 'increment', value: 1 })}>Increment 1</button>
            <button onClick={() => countContext.countDispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
            <button onClick={() => countContext.countDispatch({ type: 'reset' })}>Reset</button>

            <br />
            <br />
            This is <CompC />
        </div>
    )
}

export default CompB
