import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header({user, setUser}) {
    return (
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* if there is a user login show lookup page */}
        {!user ? 
        <Nav.Link href="/login">Login</Nav.Link>
        : 
        <>
        {/* if there is no user login do not show lookup page */}
        <Nav.Link onClick={()=> setUser(null)}>Logout</Nav.Link>
        <Nav.Link href="/lookup">Lookup</Nav.Link> 
        <Nav.Link href="/settings">Settings</Nav.Link> 
        </>

        }

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
