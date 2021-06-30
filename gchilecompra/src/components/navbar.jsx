import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';
import '../styles/navbar.scss';

function NavBar() {

    return (

        <Navbar expand='md' className="mobile-navbar-center">
        <Navbar.Brand href='/'>
            <img src={logo} alt="Garantías Chilecompra" />
        </Navbar.Brand>
        <Navbar.Toggle aría-controls='basic-navbar-nav' />
        <Navbar.Collapse id='Basic-navbar-nav-sm'>
            <Nav className='menu m-auto'>
                <Nav.Item><Nav.Link href='/'>Inicio</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/about'>Quiénes Somos</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/bidding'>Licitaciones</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/warranty'>Verificar Garantía</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/Contact'>Contacto</Nav.Link></Nav.Item>
                </Nav>
            <Nav className='btn-group m-auto'>
                <Nav.Item><Nav.Link href='/login'><button className='btn'>Ingresar</button></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/Register'><button className='btn'>Registrarse</button></Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    );
}

export default NavBar;
