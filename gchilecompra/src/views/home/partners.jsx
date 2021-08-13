import React from 'react';

import '../../styles/_partners.scss';

import empresa1 from '../../images/empresa1.png';
import empresa2 from '../../images/empresa2.png';
import empresa3 from '../../images/empresa3.png';
import empresa4 from '../../images/empresa4.png';
import empresa5 from '../../images/empresa5.png';
import empresa6 from '../../images/empresa6.png';
import empresa7 from '../../images/empresa7.png';



const Partners = () => {
    return (

        <div className='partners bg4-container-fluid mt-5'>

            <div className='safe'>
                <h3 className='partners-title'>Tu proyecto respaldado</h3>
                <div className='partners safe-text '>
                    {/* <div className='row'> */}
                        <div className=''>
                            <div className='empresas'>
                                <img src={empresa1} alt="Empresa 1" className='empresa p-3' />
                                <img src={empresa2} alt="Empresa 2" className='empresa p-3' />
                                <img src={empresa3} alt="Empresa 3" className='empresa p-3' />
                                <img src={empresa4} alt="Empresa 4" className='empresa p-3' />
                                <img src={empresa5} alt="Empresa 5" className='empresa p-3' />
                                <img src={empresa6} alt="Empresa 6" className='empresa p-3' />
                                <img src={empresa7} alt="Empresa 7" className='empresa p-3' />
                            </div>
                        </div>
                    {/* </div> */}
                    {/* // END ROW */}
                </div>
            </div>

        </div>

    )
}

export default Partners;
