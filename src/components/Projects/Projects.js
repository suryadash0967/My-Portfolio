import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#000" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Prakriti"
              description=" Prakriti is an online platform dedicated to promoting eco-friendly, handcrafted home decor products that embody the beauty of traditional craftsmanship and sustainable living. The project aims to connect consumers with artisans who create unique, high-quality items that bring warmth, elegance, and cultural richness into modern homes."
              ghLink="https://github.com/suryadash0967/prakriti-home"
              demoLink="https://suryadash0967.github.io/prakriti-home/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SnipSave"
              description="Built a full-stack code snippet manager using React.js, Node.js, Express.js, and MongoDB. Implemented JWT authentication, syntax highlighting with Prism.js, and features like snippet creation, editing, sharing, search, and sorting. Followed MVC architecture and best security practices. Planned upcoming features: real-time collaboration, analytics, and offline access."
              ghLink="https://github.com/suryadash0967/SnipSave"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" Zairzest 4.0"
              description="Contributed as a Front-end Developer for Zairzest 4.0, handling 600+ registrations across 11 events. Developed a robust MERN stack application with features like unique ZenID generation for participants, high traffic handling with zero downtime, and a fully responsive user interface."
              ghLink="https://github.com/Abhinash04/Zairzest4"
              demoLink="https://zairzest.zairza.co.in/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Maadhyam"
              description="Developed a full-stack donation platform connecting donors and recipients, delivered in 48 hours. Implemented multi-role system, CRUD operations, real-time notifications, advanced search & filtering, interactive dashboards, secure authentication, responsive UI, role-based access control, and real-time data sync."
              ghLink="https://github.com/Abhinash04/Maadhyam"
              demoLink="https://maadhyam-support.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
