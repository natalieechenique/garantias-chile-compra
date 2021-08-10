import React from 'react';

import '../styles/_document.scss';

import doc from '../images/doc.png';


const DocumentForm = () => {
    // const [details, setDetails] = useState({email:"", password:""});

    // const submitHandler = e => {
    //     e.preventDefault();

    //     Login(details);
    // }

    return (
        <div className="document form mt-5">

            <form onSubmit>
                <div className='document form-inner'>
                    <div className="document-form-title">
                        <h4>Verificar documento</h4>
                        <br></br>
                    </div>
                    <img src={doc} alt="Documento" className='doc' width='200px'/>
                    <div className="form-group">
                    <div className="documentid">
                        <label htmlFor="id">Número de documento: </label>
                        <input type="id" name="id" id="docId" />
                        </div>
                    </div>

                    {/* eslint-disable-next-line */}
                    <button type='submit' className='btn'>Verificar</button>
                </div>
            </form>
        </div>
    );
}

export default DocumentForm;