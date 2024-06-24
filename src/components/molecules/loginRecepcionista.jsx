import React from "react";
import './loginRecepcionista.css';
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function LoginRecepcionista (){
    return(
        <>
        <div className="formLogin">
            <form action="">
                <h1>Bienvenido Recepcionista</h1>
                <h2>Inicie sesión para continuar por favor</h2>
                
                <div className="inputMail">
                <label htmlFor="">Correo Electónico:</label>
                <input type="text" placeholder="Ingrese su correo electrónico" required/>
                <MdMail className="icon"/>
                </div>

                <div className="inputPassword">
                    <label htmlFor="">Contraseña:</label>
                    <br />
                    <input type="password" placeholder="Ingrese su contraseña" required/>
                    <FaLock className="icon2"/>
                </div>

                <button type="submit">Ingresar</button>
                <br />
                <br />
                

                <div className="opcionUser">
                    <p>¿Eres usuario? <br /><a href="#">Inicia Sesión Aquí</a></p>
                </div>

                <div className="opcionAdmin">
                    <p>¿Eres Administrador? <br /><a href="#">Inicia Sesión Aquí</a></p>
                </div>

            </form>

        </div>
        </>
    )
}

export default LoginRecepcionista