import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiProlog,
  DiJavascript1,
  DiHtml5,

} from "react-icons/di";
import {
  SiPrisma,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPlanetscale
} from "react-icons/si";


function Techstack() {
  const techStackData = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <DiReact/>, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwindcss" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiProlog />, name: "Prolog" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiPlanetscale />, name: "Planetscale" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.icon}
          <div style={{ marginBottom: "8px", fontSize: "12px", textAlign: "center" }}>{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}


export default Techstack;