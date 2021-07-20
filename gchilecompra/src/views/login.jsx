import React, { useState } from 'react';
import LoginForm from '../components./../components/loginForm';
// import '../styles/login.scss';
// import Modal from 'react-modal';


function Admin() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    
    const Login = details => {
        console.log(details);


        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log('Logueado');
            setUser({
                email: details.email,
                password: details.password
            });
        } else {
            console.log('Datos no coinciden');
            setError('Datos no coinciden')
        }
    }
    
    
    const Logout = () => {
        // console.log("Logout");
        setUser({ email: "", password: "" });
    } 


    return (

        <div className='Admin'>
            {/* Si email no es igual a nada, renderizar welcome */}
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Hola<span>{user.email}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}

export default Admin;