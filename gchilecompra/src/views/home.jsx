import React from 'react';
import home from '../images/home.PNG';
import shape from '../images/shape.png';
import '../styles/home.scss';
import IDSearch from '../components/idSearch'

function Home () {
    return (

    <section className='landing container-fluid'>

    <div className='bgimg'>
    <img src={shape} alt='Forma' className='bgimg' width='500px' height='700px'/>
     </div>
            <div className='bg2'>
              <img src={shape} alt='Forma2' width='200px' height='300px'/>
              </div> 


    <div className='home container-fluid'>
        {/* row */}
        <div className='row'> 
        <div className='img1 col-sm-12 col-md-4 col-lg-2'>
        <img src={home} alt="Imagen Inicio" width="300px" />      
        </div>

        <div className='col-sm-12 col-md-4 col-lg-4'></div>  

        <div className='h1-cont col-sm-12 col-md-4 col-lg-6'> 
         <h1>Somos la primera SGR <br></br>100% Online</h1><br></br>
         <p>Encuentra tu licitación y comienza tu proyecto en 3 pasos.</p>
         <p>Si ya tienes adjudicación, te la garantizamos de forma expedita.</p><br></br>
        <button className='btn'>Cotiza aquí</button>
        </div>
     </div> 

        {/* row */}
             <div className='search-container m-auto'>   
                    <IDSearch />
           </div>
         
                {/* row */}
     
  </div>
 </section>
           

 );
}

export default Home;
