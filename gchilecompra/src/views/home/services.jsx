import React from 'react';

import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';

const Services = () => {
    return (

        <div className='services container-fluid my-5 w-100'>
            <div className='services-title-container'>
                <h3>Nuestros Servicios</h3>
                <br></br>
                <h5>Te garantizamos el mejor servicio en cada uno de nuestros productos</h5>
                <br></br>  <br></br>  <br></br>
            </div>
            <div className='icons container'>
                <div className='row'>

                    <div className='col-sm-12 col-md-12 col-lg-4'>
                        <img src={icon1} alt="Icono 2" className='' />
                        <h5>Seriedad de la Oferta</h5>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-4' >
                        <img src={icon3} alt="Icono 3" className='' />
                        <h5>Correcta Ejecución</h5>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-4'>
                        <img src={icon2} alt="Icono 2" className='' />
                        <h5>Fiel Cumplimiento</h5>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Services;
