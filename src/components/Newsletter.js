import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Suscríbete a mi boletín<br></br> & Nunca no te pierdas las actualizaciones.</h3>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="new-email-bx">
                  <input type="email" placeholder="Su Email" />
                  <button>Enviar</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}