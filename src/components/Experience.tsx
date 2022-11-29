import '../assets/styles/Experience.css'
import {  useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import article_qima from '../assets/img/article_qima.jpg';
import qima from '../assets/img/qima.png';
import nvibe from '../assets/img/nvibe_img.png';
import nav from '../assets/img/nav.png';
import Carousel from "react-multi-carousel";


export const Experience = () => {

  const [activenbr_qima, setActivenbr_qima ] = useState<boolean>(false);

  const [activenbr_nvibe, setActivenbr_nvibe ] = useState<boolean>(false);


  const onUpdateActiveLink_qima = () => {
    setActivenbr_qima(!activenbr_qima)
  }

  const onUpdateActiveLink_nvibe = () => {
    setActivenbr_nvibe(!activenbr_nvibe)
  }

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
    <section className = 'experience' id= 'experience'>
      <Container>
        <Row >
            <Col>
              <h2>Experience</h2>
              <span className = "button-text">
                <Row>
                <button className = "qima" onClick={() => onUpdateActiveLink_qima()}>
                  <span>QIMA</span>
                </button>
                { activenbr_qima === true &&
                <Container>
                  <Row>
                  <Col>
                  <div className= "experience-bx">
                  <Carousel responsive={responsive} infinite={false} className="experience-slider">
                    <Col >  
                    <span className = 'description'>
                      QIMA (formerly AsiaInspection) is a global quality control provider, created in Hong Kong with a unique concept: to offer its customers an online service, for a better reactivity and a better control of the budgets. After more than 10 years of activity, importers from more than 120 countries around the world use QIMA on a regular basis, making it the leader in online quality control.
                    </span>
                    </Col>
                    <Col>
                    <a href={"https://www.qima.fr/"} target="_blank" rel="noreferrer">
                    <img className='qima_img' src={qima} alt="ImageQima"/>
                    </a>
                    </Col>
                    <Col>  
                    <div className = 'list'>
                      <p> Projects</p>
                      <ul >
                        <li>Blurry detection: Improving the blurry image detection model
  to improve the fluidity of the process during quality control.</li>
                        <li>Lead Scoring: Work closely with the US-based marketing
  team to set up a predictive model of potential customers and the revenue that could potentially be generated.</li>
                        <li>Anticipation workforce: Set up a simple recommendation system for the coordination team based in China to select inspectors to train on which expertise.</li>
                      </ul>
                    </div>
                    </Col>
                    <Col>
                    <p >Published article on QimaTechBlog</p>

                    <a href={"https://techtalks.qima.com/article-create-a-lightweight-blurred-image-detection-model-to-improve-inspection-reports/"} target="_blank" rel="noreferrer">
                      <img className="exp-img" src={article_qima} alt="ImgProject"/>
                    </a>
                    </Col>
                  </Carousel>
                  </div>  
                  </Col >  
                  </Row>
                </Container>
                }
                <button className = "n_vibe"  onClick={() => onUpdateActiveLink_nvibe()}>
                  <span>N-VIBE</span>
                </button>
                { activenbr_nvibe === true && 
                     <Container>
                     <Row>
                     <Col>
                     <div className= "experience-bx">
                     <Carousel responsive={responsive} infinite={false} className="experience-slider">
                       <Col >  
                       <span className = 'description'>
                       N-Vibe is an application that uses GPS location to guide a visually impaired person to their destination.
                       </span>
                       </Col>
                       <Col>
                       <a href={"https://n-vibe.com/"}>
                       <img className='nvibe_img' src={nvibe} alt="ImageNvibe"/>
                       </a>
                       </Col>
                       <Col>  
                       <p> Projects</p>
                       <ul className = 'list'>
                         <li>Review the literature on different approaches to "indoor
localization" and implement them.</li>
                         <li>Work closely with the developer to deliver the developed solution on
the N-Vibe application.</li>
                         <li>First test of the solution with the Vision Impaired Foundation</li>
                       </ul>
                       </Col>
                       <Col>
                       <p >Published video on N-vibe's linkedln</p>
                       <a href={"https://www.linkedin.com/feed/update/urn:li:activity:6771100304378253314/"} target="_blank" rel="noreferrer">
                         <img className="exp-img" src={nav} alt="ImgProject"/>
                       </a>
                       </Col>
                     </Carousel>
                     </div>  
                     </Col >  
                     </Row>
                   </Container>
                }
                </Row>
              </span>

          </Col>
        </Row>
      </Container>
    </section>
  );
}