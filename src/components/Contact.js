import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);  
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Mensaje enviado exitosamente'});
    } else {
      setStatus({ succes: false, message: 'Algo salio mal, por favor intente denuevo.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="wow zoomIn">
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6} className="wow fadeIn">
            <h2>Escríbeme!</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('Nombre', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.lasttName}  placeholder="Apellido" onChange={(e) => onFormUpdate('Apellido', e.target.value)}/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" value={formDetails.email}  placeholder="Email" onChange={(e) => onFormUpdate('Email', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Teléfono." onChange={(e) => onFormUpdate('Teléfono', e.target.value)}/>
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="6" value={formDetails.message}  placeholder="Mensaje" onChange={(e) => onFormUpdate('mensaje', e.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}