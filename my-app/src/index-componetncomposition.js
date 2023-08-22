import ReactDOM from 'react-dom/client';
import { Page } from './page/Page';
//Root Application component 
const App = () => <div>
    <Page></Page>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)