import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMacos,
  SiRstudio,
  SiTableau,
  SiNetlify
} from "react-icons/si";

function Toolstack() {
  const toolStackData = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiRstudio />, name: "RStudio" },
    { icon: <SiNetlify />, name: "Netlify" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStackData.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tool.icon}
          <div style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}>{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
