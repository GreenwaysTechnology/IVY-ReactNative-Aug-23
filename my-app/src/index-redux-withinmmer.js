import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { produce } from 'immer'

//old way of writting reducer
const CounterReducer = (counter = { value: 30 }, action) => {
    //biz logic : immutable logic
    switch (action.type) {
        case 'counter/increment':
            return produce(counter, draft => {
                draft.value++
            })
        default:
            return counter; //default state/inital state
    }
}
//Step 2: Create Store Object 
const appStore = configureStore({
    reducer: {
        //list of Reducers
        counter: CounterReducer
    }
})

const Counter = props => {

    //get data from the redux 
    const counter = useSelector(state => {
        //Get counter from the counter reducer
        return state.counter //appState.reducerName
    })
    const increment = useDispatch()

    const onIncrement = () => {
        increment({ type: 'counter/increment' })
    }
    return <>
        <h1>Counter App with Redux</h1>
        <h1>Counter : {counter.value}</h1>
        <button onClick={onIncrement}>+</button>

    </>
}

const App = () => {
    return <>
        {/* Step 3 */}
        <Provider store={appStore}>
            <Counter />
        </Provider>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
