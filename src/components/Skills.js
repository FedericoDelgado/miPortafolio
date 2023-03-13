import { useState } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Modal from "./Modal";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Skills = () => {

    const [alertImage, setAlertImage] = useState("");
    const [showModal, setShowModal] = useState(false); // Agregamos el estado para el modal
  
    const handleButtonClick = (image) => {
      setAlertImage(image);
      setShowModal(true); // Mostramos el modal cuando se hace clic en el botón
    };
  
    const handleModalClose = () => {
      setAlertImage("");
      setShowModal(false); // Ocultamos el modal cuando se hace clic en el botón de cierre
    };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
                        <p>Alguno de los principales lenguajes que manejo.<br></br> Sin implementar los framework de cada uno.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div><img src={meter1} alt="Image" /></div>
                                <button onClick={() => handleButtonClick(meter1)} className="skill-button">Html y Css</button>
                            </div>
                            <div className="item">
                            <div><img src={meter2} alt="Image" /></div>
                            <button onClick={() => handleButtonClick(meter1)} className="skill-button">Html y Css</button>
                            </div>
                            <div className="item">
                            <div><img src={meter3} alt="Image" /></div>
                            <button onClick={() => handleButtonClick(meter1)} className="skill-button">Html y Css</button>
                            </div>
                            <div className="item">
                            <div><img src={meter1} alt="Image" /></div>
                            <button onClick={() => handleButtonClick(meter1)} className="skill-button">Html y Css</button>
                            </div>
                            <div className="item">
                            <div><img src={meter2} alt="Image" /></div>
                            <button onClick={() => handleButtonClick(meter1)} className="skill-button">Html y Css</button>
                            </div>
                            <div className="item">
                            <div><img src={meter3} alt="Image" /></div>
                            <button onClick={() => handleButtonClick(meter1)} className="skill-button">Html y Css</button>
                            </div>    
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        {showModal && (
  <Modal show={showModal} handleClose={handleModalClose}>
    <img src={alertImage} alt="alert" />
  </Modal>
)}
    </section>
    
  )
}