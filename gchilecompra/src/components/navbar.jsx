import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import Modal from './Modal.jsx';
import { UseModal } from './UseModal';
import LoginForm from './LoginForm.jsx';
import DocumentForm from './DocumentForm.jsx';

import logo from '../images/logo.png';

import '../styles/navbar.scss';
import '../styles/login.scss';


function NavBar() {

    const [isOpenModalLogin, openModalLogin, closeModalLogin] = UseModal(false);
    const [isOpenModalSearch, openModalSearch, closeModalSearch] = UseModal(false);


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

                    <Nav.Item><Nav.Link className='/warranties'> 
                    <span onClick={openModalSearch}>Verificar Garantía</span>
                            <div className="modal2">
                                     <Modal isOpen={isOpenModalSearch} closeModal={closeModalSearch}>
                                     <DocumentForm />
                                    </Modal>
                            </div>
               </Nav.Link></Nav.Item>


                 <Nav.Item><Nav.Link href='/#contact'>Contacto</Nav.Link></Nav.Item></Nav>


                <Nav className='btn-group m-auto'>
                <Nav.Item><Nav.Link className='login'> 
                <button className='login btn' onClick={openModalLogin}>Ingresar</button>        
                  <div className="modal1">
                    <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}>
                    <LoginForm />
                        {/* children, array con elementos */}
                    </Modal>
                </div>
                  
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
