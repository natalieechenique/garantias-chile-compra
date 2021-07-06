import React from 'react';
import home from '../images/home.PNG';
import illustration1 from '../images/illustration1.png';
import illustration2 from '../images/illustration2.png';
import illustration3 from '../images/illustration3.png';
// import bg1 from '../images/bg1.png';
// import bg2 from '../images/bg2.png';
import '../styles/home.scss';
import IDSearch from '../components/idSearch'

function Home () {
  
    return (

  <div className='landing container-fluid m-0'>
  
  <div className='bgimg'>


  <div className='home container m-0'>

  <div className='row'> 

  <div className='col-sm-12 col-md-8 col-lg-'></div>   

  <div className='h1-cont col-sm-12 col-md-8 col-lg-'> 
        <h1>Somos la primera SGR <br></br>100% Online</h1><br></br>
         <p>Encuentra tu licitación y comienza tu proyecto en 3 pasos.</p>
         <p>Si ya tienes adjudicación, te la garantizamos de forma expedita.</p><br></br>
        <button className='btn'>Cotiza aquí</button>
      </div>

  </div>   

        <div className='col-sm-12 col-md-8 col-lg-4'> 
          <div className='img1 col-sm-12 col-md-4 col-lg-4'>
       <img src={home} alt="Imagen Inicio" width='400px' /> 
        </div>

</div>



       
      
      </div>


     
      </div>
        {/* <img src={bg1} alt='Forma' className='bg1' /> */}
         
        {/* row */}
        {/* <div className='row'> */}
          <div className='col-sm-12 col-md-12 col-lg-12'>
             <div className='search-container m-auto'>   
              <IDSearch />
              </div>




              {/* Tu garantía en 3 pasos */}


<section className='article container'>
<h1>Comienza tu proyecto en <span><strong> tres </strong></span>  pasos</h1>
<h5>Si ya tienes adjudicación, te la garantizamos de forma expedita</h5>
<div className='row'>
          <div className='card col-sm-12 col-md-4 col-lg-3'> 
          <div className='nContainer'>
            <h1>1</h1>
            </div>
            <h6>Regístrate y<br/>Simula tu garantía</h6>
            <img src={illustration1} alt="Ilustración" width= '170px' height= '200px' />
          </div>
        

      
          <div className='card col-sm-12 col-md-4 col-lg-3'>
          <div className='nContainer'>
          <h1>2</h1>
          </div>
          <h6>Paga tu garantía<br/>En nuestra plataforma</h6>
          <img src={illustration2} alt="Ilustración" width= '180px' height= '180px' />
          </div>
        
  
          <div className='card col-sm-12 col-md-4 col-lg-3 mb-5'>
          <div className='nContainer'>
          <h1>3</h1>
          </div>
          <h6>Firma los documentos<br/>ONLINE y ¡LISTO!
          <img src={illustration3} alt="Ilustración" width= '180px' height= '200px' className='pt-3'/>
          </h6>
          </div>
          </div>
          </section>
       

          <div className='safe container'>
          <h2>Hemos respaldado más de 70.000 Garantías</h2>
          <div className='safe-text container'>
          <div className='row'>
            <div className='col-12'>
          <h5>Con nosotros puedes sentirte seguro</h5>
          </div>
          </div>
          </div>
        </div>
       

        <div className='safe container'>
          <h2>Tu proyecto respaldado</h2>
          <div className='safe-text container'>
          <div className='row'>
            <div className='col-12'>
          <h5>imgs</h5>
          </div>
          </div>
          </div>
        </div>


        <div className='safe container'>
          <h2>Nuestros Servicios</h2>
          <div className='safe-text container'>
          <div className='row'>
            <div className='col-12'>
          <h5>Nuestros servicios</h5>
          </div>
          </div>
          </div>
        </div>

        

        <div className='safe container'>
          <h2>Somos los únicos con un buscador de licitaciones</h2>
          <div className='safe-text container'>
          <div className='row'>
            <div className='col-12'>
          <h5>Puedes encontrar más de 58.000 distintas</h5>
          </div>
          </div>
          </div>
        </div>

        <div className='safe container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
            <h2>Tu garantía en 3 pasos, 100% online</h2>
          <h5>Puedes encontrar más de 58.000 distintas</h5>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
          <img src={illustration2} alt="Ilustración" width= '180px' height= '180px' />
          </div>
          </div>
          </div>
     

          <div className='form container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
            <h2>Hola ¿necesitas ayuda?</h2>
        
          </div>
      
          </div>
          </div>





         
             

{/* 
  </div>  */}






  </div>













     </div> 

 );
}

export default Home;
