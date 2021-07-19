import React from 'react';

import '../styles/document.scss';

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
                    </div>
                    <img src={doc} alt="Documento" className='doc' width='200px'/>
                    <div className="form-group">
                        <label htmlFor="id">Número de documento: </label>
                        <input type="id" name="id" id="docId" />
                    </div>

                    {/* eslint-disable-next-line */}
                    <button type='submit'>Verificar</button>
                </div>
            </form>
        </div>
    );
}

export default DocumentForm;