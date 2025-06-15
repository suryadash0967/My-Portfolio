import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "#000" }}>
            Hi Everyone, I am <span className="purple">&nbsp;Surya Narayan Dash&nbsp;</span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I'm a dedicated developer with strong interests in algorithms, problem-solving, system design, and full-stack web development. I have completed my studies at Odisha University of Technology and Research (OUTR). I am passionate about writing clean, efficient code and continuously enhancing my technical knowledge. Beyond technology, I enjoy traveling, writing, and exploring new ideas.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
