//create dom element using react .
import ReactDOM from 'react-dom/client';

//create element/dom element => component 
const Heading = <h1>Hello React!</h1>
// const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(document.getElementById('root'));

//insert into tree .
root.render(Heading)