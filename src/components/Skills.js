import { useState } from "react";
import React from 'react';

import MyModal from "./Modal";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import CertificadoBackend from '../assets/img/CertificadoBackend.png';
import CertificadoDesarrolloWeb from '../assets/img/CertificadoDesarrolloWeb.png';
import CertificadoFronted from '../assets/img/CertificadoFronted.png';
import CertificadoFullStack from '../assets/img/CertificadoFullStack.png';
import CertificadoJS from '../assets/img/CertificadoJS.png';
import CertificadoReact from '../assets/img/CertificadoReact.png';
import CertificadoRedes from '../assets/img/Redes.png';
import CertificadoReparacion from '../assets/img/Reparacion.png';
import CertificadoReparacion2 from '../assets/img/Reparacion2.png';


export const Skills = () => {
  const [alertImage, setAlertImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (imageUrl) => {
    setAlertImage(imageUrl);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setAlertImage("");
    setShowModal(false);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>¡Hola! En este slider puedes encontrar una muestra de los estudios que he realizado.<br></br> Algunos de los principales lenguajes que manejo están incluidos en estos certificados. ¡Echa un vistazo!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <div><img src={meter1} alt="Image" /></div>
                  <MyModal image={CertificadoBackend} buttonText="Dev Backend"/>
                </div>
                <div className="item">
                  <div><img src={meter2} alt="Image" /></div>
                  <MyModal image={CertificadoDesarrolloWeb} buttonText="Dev Web"/>
                </div>
                <div className="item">
                  <div><img src={meter3} alt="Image" /></div>
                  <MyModal image={CertificadoFronted} buttonText="Dev Fronted"/>
                </div>
                <div className="item">
                  <div><img src={meter1} alt="Image" /></div>
                  <MyModal image={CertificadoFullStack} buttonText="Dev FullStack"/>
                </div>
                <div className="item">
                  <div><img src={meter2} alt="Image" /></div>
                  <MyModal image={CertificadoJS} buttonText="JavaScript"/>
                </div>
                <div className="item">
                  <div><img src={meter3} alt="Image" /></div>
                  <MyModal image={CertificadoReact} buttonText="React"/>
                </div>
                <div className="item">
                  <div><img src={meter3} alt="Image" /></div>
                  <MyModal image={CertificadoRedes} buttonText="Redes Informáticas"/>
                </div>
                <div className="item">
                  <div><img src={meter3} alt="Image" /></div>
                  <MyModal image={CertificadoReparacion} buttonText="Reparación"/>
                </div>
                <div className="item">
                  <div><img src={meter3} alt="Image" /></div>
                  <MyModal image={CertificadoReparacion2} buttonText="Reparación Avanzada"/>
                </div>
              </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />

    </section>
    
  )
}