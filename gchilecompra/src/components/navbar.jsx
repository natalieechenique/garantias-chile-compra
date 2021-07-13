import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import Modal from 'react-modal';
import logo from '../images/logo.png';
import '../styles/navbar.scss';
import '../styles/login.scss';

function NavBar() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
       setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
      
    return (

        <Navbar expand='md' className="mobile-navbar-center m">
        <Navbar.Brand href='/'>
        <img src={logo} alt="Garantías Chilecompra" />
        </Navbar.Brand>
        <Navbar.Toggle aría-controls='basic-navbar-nav' />
        <Navbar.Collapse id='Basic-navbar-nav-sm'>
            <Nav className='menu m-auto'>
                <Nav.Item><Nav.Link href='/'></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/about'>Quiénes Somos</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/bidding'>Licitaciones</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/warranty'>Verificar Garantía</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/#contact'>Contacto</Nav.Link></Nav.Item>
                </Nav>


            <Nav className='btn-group m-auto'>

                <Nav.Item>
                    <Nav.Link>
                    <button className='btn' onClick={openModal}>Ingresar</button>
                       <Modal isOpen= {modalIsOpen}>
                        <form>
                        <img src={logo} alt="Logo Inge" className='logo' width='150px' />
                        <h3>Bienvenido</h3>
                            <input />
                            <input />
                        <button className='btn'>Ingresar</button> 
                        <button className='btn' onClick={closeModal}>Cerrar</button> 
                        </form>
                    </Modal>  
                    </Nav.Link>
                    </Nav.Item>
                  
                <Nav.Item>
                 <Nav.Link 
                    href='/Register'><button className='btn'>Registrarse</button></Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    );
}

export default NavBar;
