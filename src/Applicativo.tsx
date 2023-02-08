import { useCallback, useEffect,  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import FormComponent from "./FormComponent";
import Lista from "./Lista";

function Applicativo() {


  

 

  return (
    <div className="App">
      <header className="App-header text">
        <Container>
          <Row style={{
            position: "sticky"}}>
            <Col>
              <FormComponent />
            </Col>
          </Row>

          <hr style={{  color: "white",backgroundColor:"white", border:"solid", height:5,width:"100%"}} />

          <Row>
            <Col>
            <Lista />

            </Col>
          </Row>
        </Container>
        

        
      </header>
    </div>
  );
}

export default Applicativo;