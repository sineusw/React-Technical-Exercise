import React, {useState} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'

function Login() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errorMsg, setErrorMsg] = useState(''); 

  const handleLogin = (e)=>{
    e.preventDefault(); 
    const userEmail = "user@example.com"; 
    const userpw = "password"; 
    if(userEmail === email && userpw === password){
        // login
    }

    setErrorMsg('Invalid Credentials')
    
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default Login
