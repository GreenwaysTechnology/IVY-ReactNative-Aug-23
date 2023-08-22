import ReactDOM from 'react-dom/client';


const Profile = () => {
    let userId = 1
    let name = 'Subramanian'
    let status = true
    let address = {
        city: 'Coimbatore'
    }
    let skills = ['react', 'react native']
    return <>
        <h1>Id : {userId} </h1>
        <h1>Name : {name} </h1>
        <h1>Status : {status ? "Available" : "Not Available"} </h1>
        <h1>City : {address.city} </h1>
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


const App = () => <div>
    <Profile />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)