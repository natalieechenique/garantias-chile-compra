import React, { Fragment } from 'react';

const Hello = (props) => {
    console.log(props)

    return (
        
     <Fragment>
         <h2>Hola {props.persona}</h2>  
     </Fragment>

    );
}

export default Hello;