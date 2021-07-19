import React from 'react';

import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';

import icongroup from '../images/icongroup.png';
import iconlinkedin from '../images/iconlinkedin.png';

import window from '../images/window.png';


import '../styles/about.scss';


function About() {
  return (
    <div className='about container my-5'>
      <h2>Conoce a nuestro equipo</h2>
      <h5 className='we-are mb-5'>Somos un equipo de amplia experiencia en el sector financiero</h5>

      <div className='row'>

        <div className='card col-sm-12 col-md-4 col-lg-3'>
          <div className='avatar-img '>
            <img src={avatar1} alt="Avatar" width='150px' />
          </div>
          <div>
            <h5>Carlos Canales</h5>
            <h6>Socio y Presidente directorio</h6>
            <h6>Ingeniero Civil Industrial de la
              Universidad Mayor (Chile), me he
              desempeñado como Gerente de
              distribución, Gerente Comercial, y
              Gerente de negocios financieros en
              compañías del rubro financiero y
              seguros, en dos geografías Chile y Perú</h6>
            <img src={iconlinkedin} alt="Linkedin" className='linkedin mb-5' />
          </div>

        </div>

        <div className='card col-sm-12 col-md-4 col-lg-3'>
          <div className='avatar-img'>
            <img src={avatar2} alt="Avatar" width='150px' />
          </div>
          <div>
            <h5>Carlos Canales</h5>
            <h6>Socio y Presidente directorio</h6>
            <h6>Ingeniero Civil Industrial de la
              Universidad Mayor (Chile), me he
              desempeñado como Gerente de
              distribución, Gerente Comercial, y
              Gerente de negocios financieros en
              compañías del rubro financiero y
              seguros, en dos geografías Chile y Perú</h6>
            <img src={iconlinkedin} alt="Linkedin" className='linkedin mb-5' />
          </div>
        </div>

        <div className='card col-sm-12 col-md-4 col-lg-3 mb-3'>
          <div className='avatar-img '>
            <img src={avatar3} alt="Avatar" width='150px' />
          </div>
          <div>
            <h5>Carlos Canales</h5>
            <h6>Socio y Presidente directorio</h6>
            <h6>Ingeniero Civil Industrial de la
              Universidad Mayor (Chile), me he
              desempeñado como Gerente de
              distribución, Gerente Comercial, y
              Gerente de negocios financieros en
              compañías del rubro financiero y
              seguros, en dos geografías Chile y Perú</h6>
            <img src={iconlinkedin} alt="Linkedin" className='linkedin mb-5' />
          </div>
        </div>

      </div>

      <div className='row my-5'>
        <div className='safe container'>
          <h3>Tus preocupaciones son nuestra prioridad</h3>
          <div className='safe-text container w-100'>
            <h5>Nuestro equipo te acompaña y respalda durante todo tú proceso
              <img src={icongroup} alt="Grupo" />
            </h5>
          </div>
        </div>

<div className='about-pyme container my-5'>

<div className='row'>

<div className='about-pyme-text col-sm-12 col-md-6 col-lg-6'>
<h3>Tenemos como objetivo apoyar a
todas las Pymes</h3>
<p>Contamos con el apoyo de diversas entidades que buscan hacer crecer la industria chilena y estamos supervisados como entidad financiera.
</p>
</div>

<div className='about-pic col-sm-12 col-md-6 col-lg-6'>
<img src={window} alt="Ventana" className='mb-5'width='400px' />
</div>
</div>
</div>
      </div>

    </div>


  )
}

export default About;
