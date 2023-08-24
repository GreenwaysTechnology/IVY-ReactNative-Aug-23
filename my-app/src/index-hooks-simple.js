import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

class Counter__ extends React.Component {
    //component state must be object 
    state = {
        counter: 0 // inital state
    }
    //listener 
    onIncrement = () => {
        //api to mutate state 
        // this.setState((prevState) => {
        //     //logic:immuable logic 
        //     return {
        //         ...prevState, counter: prevState.counter + 1
        //     }
        // })
        this.setState(prevState => ({
            ...prevState, counter: prevState.counter + 1
        }))
    }
    render() {
        return <>
            <h1>Counter {this.state.counter}</h1>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={() => {
                this.setState(prevState => ({
                    ...prevState, counter: prevState.counter - 1
                }))
            }}>-</button>

        </>
    }
}

//state + event handling inside functoins 
const Counter = props => {
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        // setCounter((counter) => {
        //     return counter + 1
        // })
        setCounter(counter + 1)
    }
    return <>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </>
}


const App = () => <div>
    <Counter />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)