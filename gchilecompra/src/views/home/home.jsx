import React from 'react';

import StepCards from './StepCards';
import Contact from './Contact';
import Services from './Services';
import Partners from './Partners';

import bg2 from '../../images/bg2.png';
import home from '../../images/home.PNG';

import iconSecurity from '../../images/Icon material-security.png';
import iconbook from '../../images/iconbook.png';
import iconsecurity2 from '../../images/iconsecurity.png';
import illustration4 from '../../images/illustration4.png';

import '../../styles/home.scss';
import IdSearch from '../../components/IdSearch'


function Home() {

  return (

    // Landing completo
    <div className='landing container-fluid m-0'>

      <div className='bg1img'></div>

      {/* Home banner section*/}
      <section className='home container-fluid'>

        {/* Home row */}
        <div className='row'>

          <div className='img1 col-sm-0 col-md-4 col-lg-5'>
            <img src={home} alt="Imagen Inicio" className='image1' width='350px' />
          </div>

          <div className='banner__title col-sm-12 col-md-8 col-lg-5'>
            <h1>Somos la primera SGR <br></br>100% Online</h1><br></br>
            <p>Encuentra tu licitación y comienza tu proyecto en 3 pasos.</p>
            <p>Si ya tienes adjudicación, te la garantizamos de forma expedita.</p><br></br>
            <button className='btn'>Cotiza aquí</button>
          </div>
        </div>
        {/* End Home row */}

      </section>
      {/* End Home banner section*/}


      {/* SEARCH SECTION */}
      <section className='search-container mt-5'>
        <IdSearch />
        <div className='bg2'>
          <img src={bg2} alt="Forma fondo" width='400px' height='700px' />
        </div>
      </section>


      {/* STEP CARDS SECTION */}
      <section>
        <StepCards />
      </section>


      <section className='safe text container'>
        <h3>Hemos respaldado más de 70.000 Garantías</h3>
        <div className='safe-text container align-items-center h-100 justify-content-center'>
          <div className='row'>
            <div className='col-12 align-items-center h-100 justify-content-center'>
              <h5 className=''>Con nosotros puedes sentirte seguro
              <img src={iconSecurity} alt="Ícono Escudo" className='security ml-2' width='30px' />
              </h5>
            </div>
          </div>
        </div>
      </section>


      {/* PARTNERS SECTION */}
      <section>
        <Partners />
      </section>


      {/* SERVICES VIEW COMPONENT */}
      <section>
        <Services />
      </section>


      {/* SEARCH TEXT BANNER */}
      <section className='searchtext safe container my-5'>
        <h3>Somos los únicos con un buscador de licitaciones</h3>
        <div className='safe-text container'>
          <div className='row'>
            <div className='col-12'>
              <h5>Puedes encontrar más de 58.000 distintas
                <img src={iconbook} alt="Icono libro" width='30px' className='ml-2' />
              </h5>
            </div>
          </div>
        </div>
      </section>
<br></br>

      {/* WARRANTY TEXT */}
      <section className='three-steps safe container my-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6 mb-4 mt-5'>
            <h2 className='mb-4'>Tu garantía en 3 pasos, 100% online</h2>
            <h5 className=''>¿Estás listo para registrarte? Te ofrecemos máxima
              seguridad en la compra de tu garantía
              <img src={iconsecurity2} alt="Icono libro" className='ml-2' />
            </h5>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <img src={illustration4} alt="Ilustración" width='180px' height='180px' />
          </div>
          <button className='btn'>Regístrate</button>
        </div>
      </section>
      <br></br><br></br>

      {/* CONTACT VIEW COMPONENT */}
      <section>
        <Contact />
      </section>

    </div>
    // End Landing complete

  );
}

export default Home;
