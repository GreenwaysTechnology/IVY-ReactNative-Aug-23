//create dom element using react .
import ReactDOM from 'react-dom/client';

//components using functions 
// function Heading() {
//     //must return element 
//     return <h1>Hello React</h1>
// }
const Heading = () => <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
//imperative way of calling function -
//root.render(Heading())
root.render(<Heading></Heading>)