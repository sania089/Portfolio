import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Sania_Sarin_Resume.pdf";
import { AiOutlineDownload, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document 
          file={pdf} 
          className="d-flex justify-content-center"
          onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        {/* <Row className="resume-navigation">
          <button onClick={goToPreviousPage} enabled={pageNumber === 1}>
            <AiOutlineArrowLeft style={{ fontSize: "24px" }} />
          </button>
          <button onClick={goToNextPage} enabled={pageNumber === numPages}>
            <AiOutlineArrowRight style={{ fontSize: "24px" }} />
          </button>
        </Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
