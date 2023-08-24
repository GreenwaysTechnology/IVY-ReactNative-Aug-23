import ReactDOM from 'react-dom/client';
import React from 'react';

// function getTodos(){
//     fetch(url)
//     .then(resonse => {
//         return resonse.json()
//     }).then(todos => {
//         //
//         this.setState((prvState) => {
//             return { ...prvState, todos: prvState.todos.concat(todos) }
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }
const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2 style={{ backgroundColor: 'yellow' }}>Loading...</h2>
    </>
}
const TodoList = props => {
    const { todos } = props
    return <ul>
        {todos.map((todo, index) => (
            <li key={index} style={{ listStyle: 'none' }} >
                <span style={{ margin: 10 }}>
                    {todo.id}
                </span>
                <span>
                    {todo.title}
                </span>
            </li>
        ))}
    </ul>
}

class Todos extends React.Component {
    // state = {
    //     todos: []
    // }
    state = {
        isLoaded: false, //spinner status
        todos: [], //data,
        error: null
    }
    async componentDidMount() {
        //make api call 
        const url = `https://jsonplaceholder.typicode.com/todos`
        try {
            //Todo: remove timer once the code you understood
            setTimeout(async () => {
                const response = await fetch(url)
                const todos = await response.json()
                // this.setState((prvState) => {
                //     return { ...prvState, todos: prvState.todos.concat(todos) }
                // })
                this.setState(oldState => {
                    return { ...oldState, isLoaded: true, todos: oldState.todos.concat(todos) }
                })
            }, 5000)
        }
        catch (err) {
            this.setState(oldState => {
                return { ...oldState, isLoaded: true, err: err }
            })
        }
    }
    render() {
        const { error, isLoaded, todos } = this.state;
        //conditional Rendering
        if (error) {
            return <Error error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
            return <TodoList todos={todos} />
        }
    }
}


const App = () => <div>
    <Todos />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)