import ReactDOM from 'react-dom/client';

//Every opened element must have closed
// const Hello =()=><h1>hello
const Hello = () => <h1>hello</h1>

// const Greeting = () => {
//     return <div>
//         <h1>Welcome</h1>
//         <p>Hello</p>
//     </div>
// }
// const greeting = () => {
//     return <>
//         <h1>Welcome</h1>
//         <p>Hello</p>
//     </>
// }
const Greeting = () => {
    return <>
        <h1>Welcome</h1>
        <p>Hello</p>
    </>
}

const App = () => <div>
    {/* <Hello></Hello> */}
    <Hello />
    <greeting />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)