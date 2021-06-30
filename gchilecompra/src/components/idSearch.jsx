import React from 'react';
import '../styles/home.scss';

function IdSearch() {


    return (

            <div className='search col-sm-12 col-md-12 col-lg-12-center'>

                <span className='search1 '>
                    <h6>Si no sabes el ID <br></br><strong>De tu licitación</strong></h6>
                    <button className='btn2'>Busca tu Licitación</button>
                </span>

                <span className='search2'>
                    <h6>ID Licitación</h6>
                    <input type="text" placeholder='Escribe aquí el ID'/>
                    <button className='btn2'>Simula tu Licitación</button>
                </span>

            </div>
    );
}

export default IdSearch;