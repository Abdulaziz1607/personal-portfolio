import '../assets/styles/Banner.css'
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/drag_.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toRotate = ["Data Scientist", "Front Developer"];
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100) 
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length -1) 
      : fullText.substring(0, text.length + 1)
    
    setText(updatedText);

    if(isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period)
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
              <h1>Hi, I'm Abdul!</h1>
              <span className="wrap">{text}_</span>
              <p>Keen interest in new technologies and eager to conitnually expand my skills.</p>
          </Col>
          <Col xl={5} >
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}