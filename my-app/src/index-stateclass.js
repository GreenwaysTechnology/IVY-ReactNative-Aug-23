import ReactDOM from 'react-dom/client';
import React from 'react';

class Counter extends React.Component {
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


const App = () => <div>
    <Counter />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)