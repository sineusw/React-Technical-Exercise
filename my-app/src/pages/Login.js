import React, {useState} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import usersData from '../users'
function Login({user, setUser}) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errorMsg, setErrorMsg] = useState(''); 
const history = useHistory()
  const handleLogin = (e)=>{
    e.preventDefault(); 
    loginUser(email, password); 
  }


  function loginUser(email, pw){
    //   if found user, set user
    const foundUser = usersData.find(user => user.email === email && user.password === pw); 
    if(foundUser){
      setUser(foundUser) 
      history.replace('/lookup')
    } else {
        // else say error messege
    setErrorMsg('Invalid Credentials')
    }
    
  }

  const AlertMsg = ({msg})=>(
    <Alert variant="danger">
  <p>
{msg}
  </p>

</Alert>
  )
    return (
            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    {errorMsg && <AlertMsg msg={errorMsg} />}
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=> setPassword(e.target.value)}>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default Login
