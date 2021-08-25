import React, {useState} from 'react'

function Settings({user, setUser}) {
    const [username, setUsername] = useState(user.username); 
    const [email, setEmail] = useState(user.email)
    function updateDetails(e){
        e.preventDefault();
    }

    return (
        <div>
            <h2>Your Account Details</h2>
            <form onSubmit={updateDetails}>
                <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text"/>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email"/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Settings
