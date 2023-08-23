import ReactDOM from 'react-dom/client';


const Profile = (props) => {
    const { userId, name, status, skills, address: { city } } = props
    return <>
        <h1>Id : {userId} </h1>
        <h1>Name : {name} </h1>
        <h1>Status : {status ? "Available" : "Not Available"} </h1>
        <h1>City : {city} </h1>
        <h1>Skills</h1>
        <ul>
            {
                skills.map((skill) => {
                    return <li>{skill}</li>
                })
            }
        </ul>


    </>
}


let userId = 1
let name = 'Subramanian'
let status = true
let address = {
    city: 'Coimbatore'
}
let skills = ['react', 'react native']

const App = () => <div>
    {/* {Profile(userId, name, status, address, skills)} */}
    <Profile userId={userId} name={name} status={status} address={address} skills={skills} />
    <Profile userId={12} name={"Murugan"} status={false} address={{ city: 'Coimbatore' }} skills={['js', 'java']} />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)