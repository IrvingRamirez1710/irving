import React from 'react';
import './landin.scss';
import img from '../../assets/img/undraw_programming_re_kg9v.svg';
import javascript from '../../assets/img/javascript-2752148-2284965.webp';
import php from '../../assets/img/php.jpg';
import jquery from '../../assets/img/descarga.png';
import mysql from '../../assets/img/Qué-es-MySQL-500X500_01.jpg';
import html from '../../assets/img/logo.svg';
import sass from '../../assets/img/sass-1.jpg';
import newa from '../../assets/img/1200px-React.svg.png';
import git from '../../assets/img/1_2N2fOjoSdTVvnhQosUTpnw.png';
import boostrap from '../../assets/img/Bootstrap_logo.svg.png';
import irving from '../../assets/img/irving.svg';

import fenix from '../../assets/img/fenix.png';
import logipharma from '../../assets/img/logipharma.png';
import logipharma2 from '../../assets/img/logipharma-2.png';
import logipharma3 from '../../assets/img/logipharma-3.png';
import logipharma4 from '../../assets/img/logipharma-4.png';
import Swal from 'sweetalert2';

export default function landin() {

    const Validar = () =>{
        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById("correo").value;
        let telefono = document.getElementById("telefono").value;
        let mensaje = document.getElementById("mensaje").value;

        if(nombre === "" || correo === "" || telefono === "" || mensaje === ""){
            Swal.fire({
                title: 'Para enviar el formulario debes llenar todos los campos!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }else{
            Swal.fire({
                title: 'Me pondre en contacto contigo!' + nombre,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        
    }


  return (
    <>
        <div className="container-menu">
            <ul>
                <a href="#sobremi" id='sobreMi'><li>Sobre mi</li></a>
                <a href="#skills" id='skills'><li>skills</li></a>
                <a href="#proyectos" id='proyectos'><li>Proyectos</li></a>
                <a href="#contacto" id='contacto'><li>Contacto</li></a>
                <a href="../../assets/pdf/cv.pdf" id='cv' target="_blank"><li>Descargar cv</li></a>
            </ul>
        </div>

        <div className="container-landin" id="landin">
            <div className="section-pincipal">
                <div className="title-name">
                    <h1>Irving Jahir Ramirez Flores</h1>
                    <h6>Desarrollador web</h6>
                </div>
            
                <div className="img-svg">
                    <img src={img} alt="" srcset="" />
                </div>
            </div>
            <div className="section-sobre-mi" id="sobremi">
                <div className="img-irving">
                    <img src={irving} alt="" srcset="" />
                </div>
                <div className="section-descripcion">
                    <h1>Sobre mi</h1>
                    <span>
                        Durante mi proceso de crecimiento profecional como desarrollador web.
                        He fortalecido mis hábitos, es por ello que me considero una persona responsable,
                        perseverante, paciente y con actitud de aprendizaje continuo hacia las nuevas tecnologías.
                        Además, con trabajos anteriores he podido entender los requisitos que se necesitan en un ambiente laboral como es el trabajo en equipo,
                        la comunicación asertiva y el afán de mejora continua.
                    </span>
                </div>
            </div>
            <div className="section-skills" id="skills">
               <div className="title-name" >
                    <h1>Skills web</h1>
               </div>
                <div className="skills">
                <div className="items">
                        <img src={javascript} alt="" srcset="" />
                </div>
                <div className="items">
                        <img src={newa} alt="" srcset="" />
                    </div>
                <div className="items">
                        <img src={php} alt="" srcset="" />
                    </div>
                    <div className="items">
                        <img src={jquery} alt="" srcset="" />
                    </div>
                    <div className="items">
                        <img src={mysql} alt="" srcset="" />
                    </div>
                    <div className="items">
                        <img src={git} alt="" srcset="" />
                    </div>
                    <div className="items">
                        <img src={html} alt="" srcset="" />
                    </div>
                    <div className="items">
                        <img src={sass} alt="" srcset="" />
                    </div>
                    <div className="items">
                        <img src={boostrap} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="container-proyectos" id="proyectos">
            <div className="title-proyectos">
                <h1>Proyectos</h1>
            </div>
            <div className="proyectos">
                <div className="item-proyect">
                    <img src={fenix} alt="" srcset="" />
                </div>
                <div className="item-proyect">
                    <img src={logipharma} alt="" srcset="" />
                    <img src={logipharma2} alt="" srcset="" />
                    <img src={logipharma3} alt="" srcset="" />
                    <img src={logipharma4} alt="" srcset="" />
                </div>
            </div>
        </div>

        <div className="form-contacto">
            <div className="contacto-title">
                <h1>Contacto</h1>
            </div>
            <form className="row m3" id="contacto" action="">
                <div className="col-md-12">
                    <label>Nombre</label>
                    <input type="name" id="nombre" />
                </div>
                <div className="col-md-12">
                    <label>Correo</label>
                    <input type="email" id="correo"/>
                </div>
                <div className="col-md-12">
                    <label>Telefono</label>
                    <input type="tel" id="telefono" />
                </div>
                <div className="col-md-12">
                    <label>Mensaje</label>
                    <input requiered type="msg" id="mensaje"/>
                </div>
                <div className="col-md-12 btn">
                   <a type="submit" onClick={Validar}>Contactarse</a>
                </div>
            </form>
        </div>
    </>
  )
}
