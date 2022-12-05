import '../assets/styles/Projects.css'
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/snake.png";
import projImg2 from "../assets/img/natixis.jpg";
import projImg3 from "../assets/img/percolation.jpg";

export const Projects = () => {

  const projects = [
  {
    id: 1,
    title: "Snake.IA",
    description: "Snake game and reinforcement learning",
    description2: "#javascript #Q_learning",
    imgUrl: projImg1,
    url: "https://snake-rl-limited-view.vercel.app/",
  },
  {
    id: 2,
    title: "Percolation",
    description: "Study of a disease propagation",
    description2: "#javascript #graph",
    imgUrl: projImg3,
    url: "https://percolation-red.vercel.app/"
  },
  {
    id: 3,
    title: "Natixis Challenge",
    description: "Deep Hedging for an Equinox",
    description2: "#python #finance #deeplearning",
    imgUrl: projImg2,
    url: "https://github.com/Abdulaziz1607/NATIXIS-CHALLENGE-DEEP-HEDGING",
  },

];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Check out my recent project!</p>
              <Row>
                {
                  projects.map(project => {
                    return(
                      <ProjectCard 
                        key={project.id}
                        {...project}
                      />
                    )}
                  )
                }
              </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}