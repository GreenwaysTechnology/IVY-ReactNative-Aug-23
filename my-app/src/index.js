import ReactDOM from 'react-dom/client'
import { configureStore, createAsyncThunk, createSlice, } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import logger from 'redux-logger'

//api 
function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return fetch(url)
}
const fetchTodosAsync = createAsyncThunk('todos/fetch', async () => {
    const todos = await (await fetchTodos()).json()
    return todos
})

const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        entities: [],
        loading: 'idle'
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            state.loading = 'fulfilled'
            state.entities.push(action.payload)
        })
    }
})
const TodoReducer = TodoSlice.reducer

const appStore = configureStore({
    reducer: {
        //list of Reducers
        todo: TodoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
const Todos = props => {
    const todos = useSelector(state => {
        return state.todo
    })
    // console.log(todos.entities[0])
    //Get Dispatcher 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodosAsync())
    }, [])
    
    const { loading, entities } = todos
    console.log(entities)
    if (loading === 'fulfilled') {
        return <ul>
            {
                entities[0].map(todo => {
                    return <li key={todo.id}>{todo.title}</li>
                })
            }
        </ul>
    }
}

const App = () => {
    return <>
        <Provider store={appStore}>
            <Todos />
        </Provider>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)