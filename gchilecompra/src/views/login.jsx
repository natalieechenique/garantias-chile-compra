import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Saludo from '../components/props';

function Login () {

    return (
       


// PARA PAGINA USUARIO LOGUEADO

//  Acá llamamos los props creados en `Props.jsx`, asi nos ahorramos de crear más componentes
//  props: Interacción entre componentes   
// Saludo vendría siendo componentes-variables  
// Pasan la variables a otro componente, en vez de crear un componente nuevo
// Podemos agregar otro nombre o propiedad ej edad, número reemplaza "''" por "{}""

<div className='Container mt-5'>
      <h1>Components</h1>
      < Saludo persona= 'Natalie' edad={27} />
      < Saludo persona= 'Cata' />
      < Saludo persona= 'Héctor' />
</div>
    );
}
export default Login;
