import React from 'react';

function Contact() {
    return (

        <div className='contact container pb-5 mb-5'>

            <form className='contact form safe-text container mb-5' id='contact'>

                <div className='form-title'>
                    <h3>Hola ¿Necesitas ayuda?</h3>
                    <h5>Pongámonos en contacto</h5>
                    <br></br>
                </div>

                <div className='inputs-container my-3'>
                    <div className='row'>

                        <div className='input-container'>
                            <label>Nombre</label>
                            <input
                                className="form-control col-sm-12 col-md-6 col-lg-3 p-2 m-2"
                                name="name"
                                placeholder='Nombre'
                            />
                        </div>
                        <div className='input-container'>
                            <label>Apellido</label>
                            <input
                                className="form-control col-sm-12 col-md-6 col-lg-3 p-2 m-2"
                                name="surname"
                                placeholder='Apellido'
                            />
                        </div>

                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                className="form-control col-sm-12 col-md-6 col-lg-3 p-2 m-2"
                                name="email"
                                placeholder='Email'
                            />
                        </div>

                    </div>
                    {/* End inputs-container */}

                    <div className='text-container mt-4'>

                        <div className='row '>
                            <label>Cuéntanos en que podemos ayudarte</label>
                            <textarea className="form-control col-sm-12 col-md-12 col-lg-12 ">

                                Necesito ayuda con una garantía…
                            </textarea>
                        </div>
                 
                        {/* End text-container */}
                        <button className='btn'>ENVIAR</button>
                    </div>
                    {/* End text-container Row */}

                </div>
                {/* End big Row */}

            </form>
            {/* End contact form */}

        </div>
    )
}

export default Contact;