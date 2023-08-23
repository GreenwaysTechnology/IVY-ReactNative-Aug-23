import ReactDOM from 'react-dom/client';
import React from 'react';

//state as prop and function as prop 

class Counter extends React.Component {
    //component state must be object 
    state = {
        counter: 0 // inital state
    }
    //listener 
    onIncrement = () => {
        this.setState(prevState => ({
            ...prevState, counter: prevState.counter + 1
        }))
    }
    render() {
        return <>
            <CounterDisplay {...this.state} onIncrement={this.onIncrement} />
        </>
    }
}

const CounterDisplay = props => {
    return <>
        <h1>Counter {props.counter}</h1>
        <button onClick={props.onIncrement}>+</button>
    </>
}


const App = () => <div>
    <Counter />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)