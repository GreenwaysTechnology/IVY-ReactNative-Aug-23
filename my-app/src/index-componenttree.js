import ReactDOM from 'react-dom/client';


//Header
const Header = () => <header><h1>Header</h1></header>

//Body 
const Body = () => <div>
    <section>
        <p>This is body</p>
    </section>
    <section>
        <p>This is body</p>
    </section>
    <section>
        <p>This is body</p>
    </section>
</div>

//Footer
const Footer = () => <div>
    <p>footer</p>
</div>

// Components are linked which forms tree 
const Page = () => <div>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
</div>


//Root Application component 
const App = () => <div>
    <Page></Page>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)