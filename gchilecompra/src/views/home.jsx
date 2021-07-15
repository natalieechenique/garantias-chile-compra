import React from 'react';
import home from '../images/home.PNG';
import illustration1 from '../images/illustration1.png';
import illustration2 from '../images/illustration2.png';
import illustration3 from '../images/illustration3.png';
import illustration4 from '../images/illustration4.png';
import bg2 from '../images/bg2.png';

import empresa1 from '../images/empresa1.png';
import empresa2 from '../images/empresa2.png';
import empresa3 from '../images/empresa3.png';
import empresa4 from '../images/empresa4.png';
import empresa5 from '../images/empresa5.png';
import empresa6 from '../images/empresa6.png';
import empresa7 from '../images/empresa7.png';

import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';

import iconbook from '../images/iconbook.png';
import iconsecurity from '../images/iconsecurity.png';




import '../styles/home.scss';
import IDSearch from '../components/idSearch'

function Home () {
  
  return (

// Landing completo
  <div className='landing container-fluid m-0'>
  <div className='bg1img'>
  </div>
  
 {/* Home banner section*/}
  <section className='home container-fluid'>

  {/* Home row */}
  <div className='row'> 

      <div className='img1 col-sm-0 col-md-4 col-lg-5'>
       <img src={home} alt="Imagen Inicio" className='image1' width='350px'/> 
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
      


      
        {/* Search section */}
 
          <section className='search-container mt-5'>
              <IDSearch />
              <div className='bg2'>
              <img src={bg2} alt="Forma fondo" width= '400px' height= '700px' />
              </div>
              </section>
           
            


              {/* Tu garantía en 3 pasos */}


<section className='article container fluid'>

    <h2>Comienza tu proyecto en tres pasos</h2>
    <h5>Si ya tienes adjudicación, te la garantizamos de forma expedita</h5>
  <div className='row'>

          <div className='card col-sm-12 col-md-4 col-lg-3'> 
          <div className='nContainer'><h1>1</h1></div>
          <h6>Regístrate y<br/>Simula tu garantía</h6>
          <img src={illustration1} alt="Ilustración" width= '170px' height= '200px' />
          </div>
        
          <div className='card col-sm-12 col-md-4 col-lg-3'>
          <div className='nContainer'><h1>2</h1></div>
          <h6>Paga tu garantía<br/>En nuestra plataforma</h6>
          <img src={illustration2} alt="Ilustración" width= '180px' height= '180px' />
          </div>
        
          <div className='card col-sm-12 col-md-4 col-lg-3 mb-3'>
          <div className='nContainer'><h1>3</h1></div>
          <h6>Firma los documentos<br/>ONLINE y ¡LISTO!
          <img src={illustration3} alt="Ilustración" width= '180px' height= '200px' className='pt-3'/>
          </h6>
          </div>
        </div>
      </section>
       

          <div className='safe container'>
          <h3>Hemos respaldado más de 70.000 Garantías</h3>
          <div className='safe-text container align-items-center h-100 justify-content-center'>
          <div className='row'>
            <div className='col-12 align-items-center h-100 justify-content-center'>
          <h5 className= ''>Con nosotros puedes sentirte seguro</h5>
          </div>
          </div>
          </div>
        </div>
       
        {/* Background3 */}
        <div className='bg4-container container-fluid mt-5'>
        
        <div className='safe'>
          <h3>Tu proyecto respaldado</h3>
          <div className='safe-text'>
          <div className='row'>
            <div className='col-12 d-flex'>
          <div className='empresas'>
          <img src={empresa1} alt="Empresa 1" className='empresa p-3'/>
          <img src={empresa2} alt="Empresa 2" className='empresa p-3' />
          <img src={empresa3} alt="Empresa 3" className='empresa p-3' />
          <img src={empresa4} alt="Empresa 4" className='empresa p-3' />
          <img src={empresa5} alt="Empresa 5" className='empresa p-3' />
          <img src={empresa6} alt="Empresa 6" className='empresa6 p-3' />
          <img src={empresa7} alt="Empresa 7" className='empresa7 p-3' />

          </div>

          </div>
          </div>
          </div>
          </div>
          </div>


        <div className='services container-fluid my-5  w-100'>

          <h3>Nuestros Servicios</h3>
          <h5>Te garantizamos el mejor servicio en cada uno de nuestros productos</h5>
       

       
          <div className='icons container'>
          <div className='row'>

          <div className='col-sm-12 col-md-12 col-lg-4'>
          <img src={icon1} alt="Icono 1" className='' />
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
   
        

        <div className='safe services container my-5 w-100'>
          <h3>Somos los únicos con un buscador de licitaciones</h3>
          <div className='safe-text container'>
          <div className='row'>
            <div className='col-12'>
          <h5>Puedes encontrar más de 58.000 distintas
            <img src={iconbook} alt="Icono libro" className='ml-3'/>
          </h5>
          </div>
          </div>
          </div>
        </div>

        <div className='safe container mt-5'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6 mb-4'>
            <h2 className='mb-4'>Tu garantía en 3 pasos, 100% online</h2>
            <h5 className=''>¿Estás listo para registrarte? Te ofrecemos máxima 
            seguridad en la compra de tu garantía 
            <img src={iconsecurity} alt="Icono libro" className='ml-2'/>
            </h5>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
          <img src={illustration4} alt="Ilustración" width= '180px' height= '180px' />
          </div>
          </div>
          </div>
     

         

         {/* CONTACT */}
          <form className='contact form safe-text container my-5' id='contact'>
                
                <div className='form-title'>
                <h3>Hola ¿Necesitas ayuda?</h3>
                <h5>Pongámonos en contacto</h5>
                </div>



              
          <div className='inputs-container'> 
          <div className='row'>


                {/* <label>Nombre</label> */}
                <input
                    className="form-control col-sm-12 col-md-6 col-lg-3 p-2 m-2"
                    name="name"
                    placeholder='Nombre'
                />
        
                {/* <label>Apellido</label> */}
                <input
                 className="form-control col-sm-12 col-md-6 col-lg-3 p-2 m-2"
                 name="surname"
                 placeholder='Apellido'
                /> 
        
                {/* <label>Email</label> */}
                <input
                 className="form-control col-sm-12 col-md-6 col-lg-3 p-2 m-2"
                 name="email"
                 placeholder='Email'
                /> 

           {/* </div> */}
            {/* End inputs-container */}


              <div className='text-container'>
                  
              <div className='row'>
                <label>Cuéntanos en que podemos ayudarte</label>
                <textarea className="form-control col-sm-12 col-md-12 col-lg-12" id="exampleFormControlTextarea1" rows="3">
                  Necesito ayuda con una garantía…
                 </textarea>
              </div>
              {/* End text-container */}
             
              </div>
              {/* End text-container Row */}

              </div>
              {/* End big Row */}

              </div>
               {/* End inputs-container */}
      </form>
      {/* End contact form */}



  </div>
  // End Landing complete

 );
}

export default Home;
