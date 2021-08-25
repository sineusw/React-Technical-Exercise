import React, {useState} from 'react'
import usersList from '../users'
import {useHistory} from 'react-router-dom';
function Settings({user, setUser}) {
    const [username, setUsername] = useState(user.username); 
    const [email, setEmail] = useState(user.email); 
    const history = useHistory();
    const id = user.id;
    function updateDetails(e){
        e.preventDefault();
        if(!validateEmail(email) || username.length < 3){
            return alert('Invalid email or username')
        }
        

        const foundUser = usersList.find(user => user.id === id); 
        
        foundUser.username = username; 
        foundUser.email = email; 

        alert('Updated'); 
        history.goBack();
        
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
