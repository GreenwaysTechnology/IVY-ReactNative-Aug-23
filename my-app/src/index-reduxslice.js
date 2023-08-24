import ReactDOM from 'react-dom/client'
import { configureStore, createReducer,createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'
import logger from 'redux-logger'

//action constants
const counterincrement = 'counter/increment'
const counterincrementBy = 'counter/incrementBy'
const counterdecrement = 'counter/decrement'

//way 1: old pattern
const CounterReducer_1 = (counter = { value: 30 }, action) => {
    //biz logic : immutable logic
    switch (action.type) {
        case counterincrement:
            return produce(counter, draft => {
                draft.value++
            })
        case counterincrementBy:
            return produce(counter, draft => {
                draft.value += action.payload
            })
        case counterdecrement:
            return produce(counter, draft => {
                draft.value--
            })
        default:
            return counter; //default state/inital state
    }
}

// const initalState = { value: 30 }
// const increment = 'counter/increment'
// const incrementBy = 'counter/incrementBy'
// const decrement = 'counter/decrement'

// //way 2: using createReducer

// const counterReducer = createReducer(initalState, builder => {
//     //addCase takes two arg one is action name and produce function logic
//     builder.addCase(increment, (state, action) => {
//         state.value++
//     }).addCase(incrementBy, (state, action) => {
//         state.value += action.payload
//     }).addCase(decrement, (state, action) => {
//         state.value--
//     }).addDefaultCase((state, action) => {
//         console.log('default case')
//     })
// })
const counterSlice = createSlice({
    name: 'counter',  //name used in action types : 'counter/increment'
    initialState: {
        value: 30
    },
    reducers: {
        //object notation pattern
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    },
    //builder callback api : it is recommended for typescript
    extraReducers: builder => {
        //builder.addCase
        builder.addDefaultCase((state, action) => { })
    }

})
//extract actions 
const { increment, decrement, incrementBy } = counterSlice.actions
//extract reducer
const counterReducer = counterSlice.reducer

const appStore = configureStore({
    reducer: {
        //list of Reducers
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
const Counter = props => {
    //Grab state from the redux
    const counter = useSelector(state => {
        //Get counter from the counter reducer
        return state.counter //appState.reducerName
    })
    //Get Dispatcher 
    const dispatch = useDispatch()

    const onIncrementBy = evt => {
        //action creator
        const incrementActioncreator = payload => {
            return {
                type: counterincrementBy,
                //payload:payload
                payload
            }
        }
        //trigger with payload
        dispatch(incrementActioncreator(2))
    }


    return <div className="container">
        <h1>Counter Page</h1>
        <h1>Counter : {counter.value}</h1>
        <button onClick={() => {
            dispatch({ type: counterincrement })
        }} className='btn btn-success'>+</button>
        <button onClick={() => {
            dispatch({ type: counterincrement })
        }} className='btn btn-success'>-</button>

        <button onClick={onIncrementBy} className='btn btn-success'>IncrementBy</button>
    </div>

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
