import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";
import user from '../images/user.png';


function FormHook () {

    const {register, handleSubmit, formState: { errors }} = useForm();

    // Creamos states, parte con array vacío
    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data);
    // Empujamos la data en Entradas
        setEntradas([
        ...Entradas, 
        data
        ])
        // Evento para borrar datos en placeholder
        e.target.reset();
    }
    
    
    return (

        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                
                <div className='form-title'>
                <h3>Registro de usuario <img src={user} alt='Usuario' width='30px' /></h3>
                </div>

                <label>Nombre completo</label>
                <input
                    className="form-control my-2"
                    name="name"
                    placeholder='Nombre completo'
              
                    {...register("name", {required:{value: true, message: 'Nombre requerido' 
                        },
                        minLength:{ value: 4, message: 'Mínimo 4 caracteres'
                        }
                    })
                }   
                />
           
                
                {/* Pintar error */}
                {/* Si esto no esta undefined, pintara este span */}
                <span className="text-danger text-small d-block mb-2">
                    {errors.name && errors.name.message}
                </span>
               

                <label>Rut</label>
                <input
                className="form-control my-2"
                name="rut"
                placeholder='Rut'
                    
                    {...register("rut", { 
                        required:{value: true, message: 'Rut requerido' 
                        },
                        minLength:{ value: 8, message: 'Mínimo 8 caracteres'
                    }

                    })
                }   
                /> 

                {/* Pintar error */}
                {/* Si esto no esta undefined, pintara este span */}
                <span className="text-danger text-small d-block mb-2">
                    {errors.rut && errors.rut.message}
                </span>


                <label>Email</label>
                <input
                className="form-control my-2"
                name="email"
                placeholder='Email'
                    
                    {...register("email", { 
                        required:{value: true, message: 'Email requerido' 
                        }
                        // indexOf:{value: '@@', message: 'Email inválido'}
                    })
                }   
                />
           

                {/* Pintar error */}
                {/* Si esto no esta undefined, pintara este span */}
                <span className="text-danger text-small d-block mb-2">
                    {errors.email && errors.email.message}
                </span>


                <label>Telèfono</label>
                <input
                className="form-control my-2"
                name="phone"
                placeholder='Teléfono'
                    
                    {...register("phone", { 
                        required:{value: true, message: 'Teléfono requerido' 
                        },
                        minLength:{ value: 9, message: 'Ingresar 9 dígitos'
                    }
                    })
                }   
                />


                {/* Pintar error */}
                {/* Si esto no esta undefined, pintara este span */}
                <span className="text-danger text-small d-block mb-2">
                    {errors.phone && errors.phone.message}
                </span>



                <label>Crear contraseña</label>
                <input
                className="form-control my-2"
                name="password"
                placeholder='Contraseña'
                    
                    {...register("password", { 
                        required:{value: true, message: 'Contraseña requerida' 
                        },
                        minLength:{ value: 6, message: 'Mínimo 6 caracteres'
                    }
                    })
                }   
                />
               
                
                {/* Pintar error */}
                {/* Si esto no esta undefined, pintara este span */}
                <span className="text-danger text-small d-block mb-2">
                    {errors.password && errors.password.message}
                </span>


                <label>Repetir contraseña</label>
                <input
                className="form-control my-2"
                name="repassword"
                placeholder='Contraseña'
                    
                    {...register("repassword", { 
                        required:{value: true, message: 'Contraseña requerida' 
                        },
                        minLength:{ value: 8, message: 'Contraseñas no coinciden'
                    }

                    })
                }   
                />


                {/* Pintar error */}
                {/* Si esto no esta undefined, pintara este span */}
                <span className="text-danger text-small d-block mb-2">
                    {errors.repassword && errors.repassword.message}
                </span>
                
            <button className="btn send">Enviar</button>
            <br/>
              <div>
                <div> 
                    Ya tengo cuenta Ingresar
                </div>
                <br/>
                <div> 
                    <button className="btn3">Continuar con con Google</button>
                </div>
                </div>

            </form>
            
                <ul>
                {
                Entradas.map(item =>
                    <li>{item.name} - {item.rut} - {item.email} - {item.phone} - {item.password} - {item.repassword} </li>
                    )
                    }
                </ul>

                </Fragment>
                );
                }

         export default FormHook;
