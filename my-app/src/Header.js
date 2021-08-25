import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
// link container makes sures the pages doesn't refresh after redirecting the route
import {LinkContainer} from 'react-router-bootstrap'

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
        <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        : 
        <>
        {/* if there is no user login do not show lookup page */}
        <Nav.Link onClick={()=> setUser(null)}>Logout</Nav.Link>
        <LinkContainer to="/lookup">
        <Nav.Link>Lookup</Nav.Link> 
        </LinkContainer>

        <LinkContainer to="/settings">
        <Nav.Link> Settings </Nav.Link> 
        </LinkContainer>  
        </>

        }

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
