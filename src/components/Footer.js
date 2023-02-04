import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/federico-delgado-b4159a123/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://www.facebook.com/federico.delgado.3386"><img src={navIcon2} alt="facebook" /></a>
                <a href="https://www.instagram.com/delgadofefe/"><img src={navIcon3} alt="Instagram" /></a>
                <a href="https://github.com/FedericoDelgado"><img src={navIcon4} alt="GitHub" /></a>
              </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}