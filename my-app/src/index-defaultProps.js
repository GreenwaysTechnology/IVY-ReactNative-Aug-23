import ReactDOM from 'react-dom/client';


const Profile = (props) => {
    return <>
        <h1>Id : {props.userId} </h1>
        <h1>Name : {props.name} </h1>
        <h1>Status : {props.status ? "Available" : "Not Available"} </h1>
        <h1>City : {props.address.city} </h1>

    </>
}
//default Props 
Profile.defaultProps = {
    userId: 0,
    name: 'name',
    status: false,
    address: {
        city: 'city'
    },
    skills:[]

}

let userId = 1
let name = 'Subramanian'
let status = true
let address = {
    city: 'Coimbatore'
}
let skills = ['react', 'react native']

const App = () => <div>
    <Profile name={"Your Name"} />
    <Profile userId={12} name={"Murugan"} status={false} address={{ city: 'Coimbatore' }} skills={['js', 'java']} />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)