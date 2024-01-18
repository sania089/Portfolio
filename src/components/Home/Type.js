import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Multilingual Coder",
          "Full Stack Developer",
          "Data Analyst & BI Specialist",
          "Machine Learning Engineer",
          "Cybersecurity Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
