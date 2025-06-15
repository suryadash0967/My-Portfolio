import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit color="#000"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython color="#000"/>
      </Col>
    </Row>
  );
}

export default Techstack;
