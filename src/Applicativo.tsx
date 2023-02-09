import { useCallback, useEffect } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import FormComponent from "./FormComponent";
import Lista from "./Lista";

function Applicativo() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col style={{ marginRight: "70px" }}>
            <FormComponent />
          </Col>

          <Col>
            <h2
              style={{
                color: "white",
              }}
            >
              la tua lista
            </h2>
            <Lista />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Applicativo;
