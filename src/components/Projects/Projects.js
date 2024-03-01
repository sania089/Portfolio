import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dc from "../../Assets/Projects/dc.png";
import mov from "../../Assets/Projects/mov.jpg";
import food from "../../Assets/Projects/food.png";
import saniflex from "../../Assets/Projects/saniflex.png";
import exp from "../../Assets/Projects/exp.svg";
import fake from "../../Assets/Projects/fake.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dc}
              isBlog={false}
              title="Discord Clone"
              description="Discord clone with fullstack capabilities, including servers, channels, video calls, audio calls, and message editing.
               Key features include real-time messaging using Socket.io, message attachments, message deletion and editing for all users,
                1:1 conversations and video calls, unique invite system, infinite message loading, UI design with TailwindCSS and ShadcnUI, 
                full responsivity, light/dark mode, WebSocket fallback, Prisma ORM, MySQL database using Planetscale, and authentication with Clerk."
              
              ghLink="https://github.com/sania089/discord-clone"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saniflex}
              isBlog={false}
              title="SaniFlex Gym"
              description="With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand 
              exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, and much 
              more, which uses Material UI(version 5) for designing User and fetching data from unlimited sources using RapidAPI."
              ghLink="https://github.com/sania089/gymapp"
              demoLink="https://saniflexgym.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fake}
              isBlog={false}
              title="Machine Learning model for detecting fake news"
              description="Used machine learning to make a working prototype for the kavach topic:
              Advanced fake news detection system using logistic regression."
              demoLink="https://colab.research.google.com/drive/1xief9dGx_qsgr39Rx0BlxRFXmtOrnCU7"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exp}
              isBlog={false}
              title="Expense Tracker app"
              description="Made an Expense Tracker application using MongoDB, Express, Node.js, and React. This application allows users to
              manage and track their expenses, offering featuresfor expense entry, categorization, and reporting. This project demonstrates proficiency in
              full-stack development and database management"
              ghLink="https://github.com/sania089/ExpenseTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mov}
              isBlog={false}
              title="Movie ticket booking systemn"
              description="Developed a Java Movie Ticket Booking System that enables usersto browse movies and select
              showtimes. Implemented features such as user registration, seat reservation, and admin management."
              ghLink="https://github.com/sania089/MP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food delivery system"
              description="Crafted a seamless food delivery system with JavaScript, HTML, CSS, MySQL& PHP. Backed by PHPMyAdmin for
              efficient data management. Customers use this platform to search and discover restaurants. We are also providing the users with an 
              efficient delivery service. It also provides delivery partners with transparent and flexible earning opportunities.
              "
              ghLink="https://github.com/nandhini2314/mini-project"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
