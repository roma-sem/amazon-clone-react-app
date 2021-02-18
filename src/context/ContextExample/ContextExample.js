import React, {useReducer} from 'react';
import CompA from './CompA';

export const CounterContext = React.createContext();

export default function ContextExample() {
    const initState = {
        counter: 0
    };

    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment':
                return { counter: state.counter + action.value }
            case 'decrement':
                return { counter: state.counter - action.value }
            case 'reset':
                return initState
            default:
                return state
        }
    }

    const [counter, dispatch] = useReducer(reducer, initState);

    return(
        <div>
            <CounterContext.Provider value={{countState: counter, countDispatch: dispatch}} >
                Counter = <strong>{counter.counter}</strong>
                <CompA />
            </CounterContext.Provider>
        </div>
    )
}
