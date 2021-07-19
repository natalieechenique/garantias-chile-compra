import React from 'react'

import illustration1 from '../../images/illustration1.png';
import illustration2 from '../../images/illustration2.png';
import illustration3 from '../../images/illustration3.png';


const StepCards = () => {
  return (

    <div className='stepcards article container'>

      <h3>Comienza tu proyecto en tres pasos</h3>
      <h5>Si ya tienes adjudicación, te la garantizamos de forma expedita</h5>
      <div className='row'>

        <div className='card col-sm-12 col-md-4 col-lg-3'>
          <div className='nContainer'><h1>1</h1></div>
          <h6>Regístrate y<br />Simula tu garantía</h6>
          <img src={illustration1} alt="Ilustración" width='170px' height='200px' />
        </div>

        <div className='card col-sm-12 col-md-4 col-lg-3'>
          <div className='nContainer'><h1>2</h1></div>
          <h6>Paga tu garantía<br />En nuestra plataforma</h6>
          <img src={illustration2} alt="Ilustración" width='180px' height='180px' />
        </div>

        <div className='card col-sm-12 col-md-4 col-lg-3 mb-3'>
          <div className='nContainer'><h1>3</h1></div>
          <h6>Firma los documentos<br />ONLINE y ¡LISTO!
            <img src={illustration3} alt="Ilustración" width='180px' height='200px' className='pt-3' />
          </h6>
        </div>
      </div>
    </div>

  );
}

export default StepCards;