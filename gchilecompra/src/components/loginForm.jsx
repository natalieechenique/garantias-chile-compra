import React, { useState } from 'react';
import logo from '../images/logo.png';


const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className='login-form'>

        <form onSubmit={submitHandler}>

            <div className='login-form-inner'>
            <div className="login-form-title">
             </div>
            <img src={logo} alt="Logo Inge" className='logo' width='150px' />
             <h3>Bienvenido</h3>
            
                <div className="login form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div className="login form-group">
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                 {/* eslint-disable-next-line */}
                <button type='submit' value='Entrar'>Entrar</button>
            </div>
        </form>
        </div>
    );
}

export default LoginForm;
