import React from 'react';
import securityicon from '../images/securityicon.png';

function Bidding() {
    return (
        <div className='bidding container my-5'>
            <h3>Busca tú licitación y Simula tú garantía</h3>
            <br></br>
            <h5>Contamos con más de 58.000 licitaciones para que puedas seguir trabajando e inspirándote.</h5>

            <section className='safe text container'>
                <div className='safe-text container align-items-center h-100 justify-content-center'>
                    <div className='row'>

                        <div className='col-12 align-items-center h-100 justify-content-center'>
                            <h3>Hemos respaldado más de 70.000 Garantías</h3>
                            <h5 className=''>Con nosotros puedes sentirte seguro
                                <img src={securityicon} alt="Ícono Escudo" className='security ml-2' width='30px' />
                            </h5>
                        </div>
                    </div>
<br></br>
                </div>
            </section>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>



            <form className=' contact bidding form my-5' id='bidding'>

                <div className='form-title'>
                    <h6>Ingresa los siguientes datos y simula el costo de tu garantía</h6>
                    <br></br>
                </div>

                <div className='inputs-container my-3'>
                    <div className='row'>

                        <div className='input-container col-sm-12 col-md-4 col-lg-4 m-1'>
                            <input
                                className="form-control "
                                name="name"
                                placeholder='Nombre'
                            />
                        </div>

                        <div className='input-container col-sm-12 col-md-4 col-lg-4 m-1'>
                            <input
                                className="form-control "
                                name="surname"
                                placeholder='Mes plazo'
                            />
                        </div>

                        <div className='input-container col-sm-12 col-md-4 col-lg-4 m-1'>
                            <input
                                className="form-control"
                                name="email"
                                placeholder='Finalidad'
                            />
                        </div>
                        <button className='btn'>Simula</button>
                    </div>
                    {/* End inputs-container */}
                </div>
                 {/* End form row*/}
            </form>


        </div>
        // {/* // End Function */}

    );
}

export default Bidding;