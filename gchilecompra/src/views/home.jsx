import React from 'react';
import home from '../images/home.png';
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
       <img src={home} alt="Imagen Inicio" /> 
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
         
             

{/* 
  </div>  */}






  </div>













     </div> 

 );
}

export default Home;
