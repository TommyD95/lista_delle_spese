import { useCallback, useEffect } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import FormComponent from "../components/FormComponent";
import GeneralForm from "./GeneralForm";
import Lista from "./Lista";

function Applicativo() {
  return (

<div style={{ textAlign: 'center', height: '100vh', overflow: 'auto' }}>
      <Container >
        <Row style={{ position: "sticky", top: 0,backgroundColor:'#282c34', zIndex:100 , border:'solid #3B71CA 2px'}}>
          <Col >
            <FormComponent />
          </Col>
          
        </Row>
        <Row style={{zIndex:150, position:'sticky',top:348,backgroundColor:'#282c34',}}><h2
              style={{
                color: "white",
              }}
            >
              La tua lista
        </h2>
        </Row>
        <Row style={{}}>
       
          <Col>
            
            <Lista />
          </Col>
        </Row>
      </Container>  

      <GeneralForm />
      </div>
    
  );
}

export default Applicativo;
