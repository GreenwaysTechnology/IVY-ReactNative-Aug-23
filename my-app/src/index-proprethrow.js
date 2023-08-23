import ReactDOM from 'react-dom/client';


const ProfileMaster = (props) => {
    // return <> <Dashboard userId={props.userId} name={props.name} status={props.status} address={props.address} />
    return <>
        <Dashboard {...props} title="Profile Dashboard" />
    </>
    // </>
}
const Dashboard = props => {
    return <>
         <h1>{props.title}</h1>
         <h1>Id : {props.userId} </h1>
        <h1>Name : {props.name} </h1>
        <h1>Status : {props.status ? "Available" : "Not Available"} </h1>
        <h1>City : {props.address.city} </h1>
    </>
}
//default Props 
ProfileMaster.defaultProps = {
    userId: 0,
    name: 'name',
    status: false,
    address: {
        city: 'city'
    },
    skills: []

}

let userId = 1
let name = 'Subramanian'
let status = true
let address = {
    city: 'Coimbatore'
}
let skills = ['react', 'react native']

const App = () => <div>
    <ProfileMaster name={"Your Name"} />
    <ProfileMaster userId={12} name={"Murugan"} status={false} address={{ city: 'Coimbatore' }} skills={['js', 'java']} />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)