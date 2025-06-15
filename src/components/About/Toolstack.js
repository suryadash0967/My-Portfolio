import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiThreedotjs,
  SiGithub,
  SiFigma
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub  color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiThreedotjs  color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma  color="#000"/>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
