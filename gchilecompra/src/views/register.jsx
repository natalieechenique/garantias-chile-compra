import React from 'react';
import RegisterForm from '../components/registerForm';
import illustration5 from '../images/illustration5.png';
import '../styles/_register.scss';

function Register() {
    return (

        <div className='register container'>
            <div className='row'>

                <div className='form-container col-sm-12 col-md-6 col-lg-6'>
                    <RegisterForm />
                </div>

                <div className='image-container col-sm-12 col-md-6 col-lg-6'>

                    <div className='signup-text mt-5'>
                        <h2>¡Bienvenido! <br /> Te tenemos todo preparado</h2>
                        <h5>Regístrate y disfruta de una plataforma diseñada para ti.</h5>
                    </div>

                    <div className='register-img mt-5'>
                        <img src={illustration5} alt="Ilustración registro" />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Register;