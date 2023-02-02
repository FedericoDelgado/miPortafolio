import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="wow zoomIn">
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6} className="wow fadeIn">
            <h2>Escríbeme!</h2>
            <form>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" placeholder="Nombre" onChange={(e) => onFormUpdate('Nombre', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" placeholder="Apellido" onChange={(e) => onFormUpdate('Apellido', e.target.value)}/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" placeholder="Email" onChange={(e) => onFormUpdate('Email', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="tel" placeholder="Teléfono." onChange={(e) => onFormUpdate('Teléfono', e.target.value)}/>
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="6" placeholder="Mensaje" onChange={(e) => onFormUpdate('mensaje', e.target.value)}></textarea>
                  <button><span>Enviar</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}