import ReactDOM from 'react-dom/client';
import logo from './logo.svg';


const Panel = props => {
    return <div>
        {props.children}
    </div>
}

const Image = ({ url }) => {
    return <img src={url} height={100} width={100} alt='Fallback' />
}
const Text = ({ value }) => {
    return <h1>{value}</h1>
}
const App = () => <div>
    {/* <Panel/> */}
    <Panel>
        {/* component as prop */}
        <Image url={logo} />
        <Text value="Learn React" />
    </Panel>

</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)