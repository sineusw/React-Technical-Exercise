import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

function Login() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

    return (
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
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
