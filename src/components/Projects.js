import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projet1.png";
import projImg2 from "../assets/img/projet2.png";
import projImg3 from "../assets/img/projet3.png";
import projImg4 from "../assets/img/projet4.png";
import projImg5 from "../assets/img/projet5.png";
import projImg6 from "../assets/img/projet6.png";
import projImg7 from "../assets/img/projet7.png";
import projImg8 from "../assets/img/projet8.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

// Projets Web Development
const webProjects = [
  {
    title: "Online Restaurant",
    description: "Full Stack Development",
    imgUrl: projImg1,
    githubLink: "https://github.com/votre_profil/online-restaurant", // Remplacez par votre vrai lien
  },
  {
    title: "Web application for selling Moroccan handcrafted products",
    description: "Full Stack Development",
    imgUrl: projImg4,
    githubLink: "https://github.com/votre_profil/moroccan-handcrafted-products", // Remplacez par votre vrai lien
  }
];

// Projets AI
const aiProjects = [
  {
    title: "Biometric Identification System",
    description: "Deep Learning Project",
    imgUrl: projImg2,
    githubLink: "https://github.com/votre_profil/biometric-identification-system", // Remplacez par votre vrai lien
  },
  {
    title: "Building and deployment of Mortgage Trading Analysis Pipeline",
    description: "ML and Data Science Project",
    imgUrl: projImg5,
    githubLink: "https://github.com/votre_profil/biometric-identification-system", // Remplacez par votre vrai lien
 
  },
  {
    title: "Building Movie Review Predictions Model",
    description: "Deep Learning Project",
    imgUrl: projImg6,
    githubLink: "https://github.com/votre_profil/biometric-identification-system", // Remplacez par votre vrai lien
 
  },
  {
    title: "Building employee attrition Predicting Model",
    description: "Machine Learning Project",
    imgUrl: projImg7,
    githubLink: "https://github.com/votre_profil/biometric-identification-system", // Remplacez par votre vrai lien
 
  },
  {
    title: "Building a Smartness Level Test Model",
    description: "Machine Learning Project",
    imgUrl: projImg8,
    githubLink: "https://github.com/votre_profil/biometric-identification-system", // Remplacez par votre vrai lien
 
  }
];

// Projets Mobile Development
const mobileProjects = [
  {
    title: "Mobile Application for selling traditional Moroccan items",
    description: "Full Stack Development",
    imgUrl: projImg3,
    githubLink: "https://github.com/votre_profil/mobile-app-traditional-items", // Remplacez par votre vrai lien
  }
];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Vous pouvez voir chaque projet en détail sur <a href="https://github.com/votre_profil">GitHub</a>.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* Web Development Projects */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {webProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })}
                      </Row>
                    </Tab.Pane>

                    {/* AI Projects */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {aiProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })}
                      </Row>
                    </Tab.Pane>

                    {/* Mobile Development Projects */}
                    <Tab.Pane eventKey="third">
                      <Row>
                        {mobileProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
