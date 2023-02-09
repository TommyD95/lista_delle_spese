import { Container, Card, Spinner } from "react-bootstrap";

function BenvenutoPage() {
    return (
        <Container className="d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: "#282c34" }}>
            <Card style={{ width: "18rem" }} className="text-center">
                <Card.Body className="font-weight-bold" style={{ backgroundColor: '#282c34', fontSize: 27, color: 'white' }}>
                    Benvenuto nella tua lista delle spese!
                    <br />
                    <Spinner animation="grow" variant="light" />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BenvenutoPage;