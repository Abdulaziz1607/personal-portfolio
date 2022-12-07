import '../assets/styles/Contact.css'
import { Col, Row, Container } from "react-bootstrap";
import CV from "../assets/files/CV_2022_update.pdf"

export const DownloadCV = () => {

  return (
    <div className="download-bx">
      <Container >
        <Row className=" align-items-center">
          <Col>
            <h3>You can download my CV here</h3>
          </Col>
          <Col>
          <div className="cv-download-bx">
            <a href={CV} download="CV_2022_update"><button>Download CV</button></a>
          </div></Col>
        </Row>
      </Container>
    </div>

        

  )
}