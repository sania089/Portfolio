import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I am <span className="purple">Sania Sarin </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            At KJ Somaiya College of Engineering, I'm presently working towards a bachelor's degree in computer engineering (2021–2025).
            <br />
            <br />
            During my web development internship at KJSCE, I contributed to an adaptive test-taking application for GRE-like exams. Currently interning in machine learning, I'm utilizing ML and ArcGIS to monitor crops—an exciting intersection of technology and agriculture.
            <br />
            <br />
            Beyond academics, I've honed my leadership skills as the Logistics Head at KJSCE Shutterbugs, successfully managing a team of 40+ individuals for events and festivals
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enrolling myself in various workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing different courses in a variety of domains
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games and Binge watching
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
