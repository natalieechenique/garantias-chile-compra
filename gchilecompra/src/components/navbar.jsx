import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';



function NavBar () {

    const Styles = styled.div`
    position: sticky;
    top: 0px;
    .navbar {
       background-color: #72BAEC; 
    }
    .mobile-navbar {
    
        @media (max-width: 768px) {
            display: grid; 
            grid-template-columns: 1fr 70px;
          }
    
    }
    .navbar-brand, .navbar-nav .nav-link {
    color: white;
    
    &:hover {
        color: black;
      }
    
     }
    `;
    
    
    return (

        <Styles>
        <Navbar expand='lg' className="mobile-navbar">
        <Navbar.Brand href='/'>
            {/* <img src={logo} alt="Garantías Chilecompra" width='80px' /> */}
        </Navbar.Brand>
        <Navbar.Toggle aría-controls='basic-navbar-nav' />
        <Navbar.Collapse id='Basic-navbar-nav'>
            <Nav className='ml-auto'>
                <Nav.Item><Nav.Link href='/'>Inicio</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/About'>Nosotros</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    // </Styles>
    );
}

export default NavBar;
