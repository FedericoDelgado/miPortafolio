import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="wow fadeIn" dataWowDuration="1.5s">
            <span className="tagline">Bienvenidos a mi Portafolios</span>
            <h1>{`Hola! Soy Fede`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Prodramador Web", "Técnico informático" ]'></span></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button onClick={() => console.log('connect')}>Contácteme <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5} className="wow zoomIn" dataWowDuration="1.5s">
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}