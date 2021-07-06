import React from 'react';
import {Link} from 'react-router-dom';

function Api () {

// Datos que vienen de una Api pública -sin parámetros
  
// Creamos el estado, pondremos array vacío
// Cuando se pinte el componente, llamamos a los datos
    const [equipo, setEquipo] = React.useState([])

// Llamamos a set equipo, es decir llamamos a todo el array datos
// Agregamos [] para quitar el bucle infinito que se genera
React.useEffect(() => {
  obtenerDatos()
}, [])


// Función llamado a la Api transformándola a json
const obtenerDatos = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    const users = await data.json()
    // Le agregamos un punto a users ya que se accede 1ro a la propiedad del objeto
    setEquipo(users.civilizations)
}

return (
       
///* LLAMAMOS A LA API EN UNA LISTA */ NO TIENE KEY

<div>
    <h2>Civilizaciones</h2>
      <ul>
        {
          equipo.map(item => (
            <li key={item.id}>
                <Link to={`/api/${item.id}`}>
                    {item.name} - {item.expansion}
                </Link>
            </li>
          ))
        }
      </ul>
      </div>    
)
}

export default Api;
