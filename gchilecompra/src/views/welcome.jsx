import React, { useEffect } from 'react';
import Hello from '../components/hello';

function Welcome () {

// Datos que vienen de una Api pública -sin parámetros
  
// Creamos el estado, pondremos array vacío
// Cuando se pinte el componente, llamamos a los datos
    const [equipo, setEquipo] = React.useState([])

// Llamamos a set equipo, es decir llamamos a todo el array datos
// Agregamos [] para quitar el bucle infinito que se genera
useEffect(() => {
obtenerDatos()
}, [])


// Función llamado a la Api transformándola a json
const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    // console.log(users)
    setEquipo(users)
}

return (
       
// PARA PAGINA USUARIO LOGUEADO

//  Acá llamamos los props creados en `Props.jsx`, asi nos ahorramos de crear más componentes
//  props: Interacción entre componentes   
// Saludo vendría siendo componentes-variables  
// Pasan la variables a otro componente, en vez de crear un componente nuevo
// Podemos agregar otro nombre o propiedad ej edad, número reemplaza "''" por "{}""
<div className='container mt-5'>
      <h1>Components</h1>
      < Hello persona= 'Natalie' edad={27} />
      < Hello persona= 'Cata' />
      < Hello persona= 'Héctor' />
      < Hello persona= 'Payasos' />


 {/* LLAMAMOS A LA API EN UNA LISTA */}
<div className='container mt-5'>
    <h2>Usuarios</h2>
      <ul>
        {
        equipo.map(item => (
        <li key= {item.id}>{item.name} - {item.email}</li>
         ))
        }
      </ul>
    </div>
</div>
 );
}

export default Welcome;
