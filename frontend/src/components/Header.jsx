import React from 'react'
import {Navbar, Nav, Container, NavbarCollapse, NavLink} from 'react-bootstrap';
import {download} from 'react-icons/bi';
const Header = () => {
  return (
   <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>GraffitiResin-Simulation</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <NavbarCollapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <NavLink href='/download'><bi-download/> Download</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
   </header>
  )
}

export default Header