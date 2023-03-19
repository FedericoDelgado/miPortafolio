import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerfede.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Programador Web", "Técnico Informático" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
             <span className="tagline">Bienvenidos a mi Portafolios</span>
             <h1>{`Hola! Soy Fede`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Prodramador Web", "Técnico Informático" ]'><span className="wrap">{text}</span></span></h1>
              <p>Estimados,<br/><br/>
Mi nombre es Federico Delgado, soy un emprendedor apasionado por la tegnologia desde muy joven, pasion que me llevo a estudiar y trabajar en ella. Soy Tecnico en Computación, graduado en el intituto argentino de computacion, he estado desarrollando mis habilidades y conocimientos en el campo de la tecnología desde entonces.<br/><br/>

Además de mi formación técnica, actualmente estoy estudiando para ser un Programador Full Stack en CoderHouse, un prestigioso bootcamp de programación en Argentina. Mi objetivo es seguir creciendo profesionalmente y aportar mis conocimientos y habilidades en una empresa dinámica y en constante crecimiento.<br/><br/>

Soy de Buenos Aires, una ciudad vibrante y llena de oportunidades, y estoy altamente apasionado por viajar y conocer nuevos lugares y culturas. Creo que esta pasión me ha permitido desarrollar una perspectiva amplia y un enfoque global en mi trabajo.<br/><br/>

Como Tecnico en Computación, he desarrollado habilidades en resolución de problemas, capacidad de trabajo en equipo y atención al detalle. Además, mi formación en CoderHouse me ha brindado una sólida base en programación y tecnologías web, así como en metodologías ágiles y desarrollo de software.<br/><br/>

Estoy seguro de que puedo aportar un valor significativo a cualquier equipo, y estoy dispuesto a trabajar duro y hacer una contribución relevante a cualquier proyecto. Creo que mi formación técnica y mi dedicación son una combinación ganadora, y estoy ansioso por poner mis habilidades a prueba en un entorno desafiante y estimulante.<br/><br/>

Si están interesados en mi candidatura, por favor no duden en contactarme. Estoy a su disposición para proporcionar referencias y cualquier otra información que necesiten.<br/><br/>

Les agradezco por su tiempo y consideración, y espero tener la oportunidad de hablar con ustedes pronto.<br/><br/>

Atentamente,

[Federico Delgado]</p>
              <button onClick={() => console.log('connect')}>Contácteme <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}