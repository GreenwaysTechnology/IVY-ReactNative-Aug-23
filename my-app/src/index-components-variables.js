//create dom element using react .
import ReactDOM from 'react-dom/client';

//variable pattern
const Heading = <h1>Hello React!</h1>
console.log(Heading)

const root = ReactDOM.createRoot(document.getElementById('root'));

//insert into tree .
root.render(Heading)