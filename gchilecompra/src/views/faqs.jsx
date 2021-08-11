import React from 'react';
import faqs from '../images/faqs.png';

const Faqs = () => {
     
return (

<div className='faqs'>

<div className="faq container">
<h1>Preguntas frecuentes</h1>

<div className="row">

<div className="pic col-6">
     <img src={faqs} alt="Preguntas" weight='400px' height='150px' my-5 /> 
    </div>

  <div className="searching col-6">
  <input type="search" placeholder="Busca tu Archivo" id="Buscador" className='searching' />
    </div>

    <div className="toggle container my-5">

      <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" for="chck1"> ¿Lorem ipsum dolor sit amet consectetur? </label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
        </div>

        <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" for="chck1">¿Lorem ipsum dolor sit amet consectetur?</label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
        </div>

        <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" for="chck1">¿Lorem ipsum dolor sit amet consectetur?</label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
        </div>

        <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" for="chck1">¿Lorem ipsum dolor sit amet consectetur?</label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
        </div>

 
    
 
  </div>



  </div>
  
  </div>

  </div>



    );
}

export default Faqs;
