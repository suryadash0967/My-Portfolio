import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <h4 style={{color: "#fff"}}>
            Contact Me:
          </h4>
          <p style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
            Mob: +91 6370222576
            <br/>
            Email: surya.dash0967@gmail.com
          </p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/suryadash0967"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/SuryaNa65388267"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={30}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/surya-narayan-dash-4b396b291/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/surya___dash967"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30}/>
              </a>
            </li>
          </ul>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;
