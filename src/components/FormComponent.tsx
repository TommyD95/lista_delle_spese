import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useAddAttivitaMutation } from "../Hooks/chiamateAPI";
import { Categoria, ISpesa } from "../Model/spesaModel";

function FormComponent() {
  const [addAttivita, addResult] = useAddAttivitaMutation();

  const [nome, setNome] = useState<string>("");
  const [importo, setImporto] = useState<number>(0);
  const [categoria, setCategoria] = useState<Categoria>(Categoria.Casa);

  const categoriaKeys = Object.values(Categoria);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const simulaAttivita: ISpesa = {
      nome,
      importo,
      categoria,
    };

    addAttivita(simulaAttivita);
  };

  return (
    <>
      <h2 style={{color:'white'}}>Aggiungi le tue spese</h2>
    <Form
      onSubmit={submit}
      style={{
        fontSize: "15pt",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        width: "100%",
        color: "white",
        border: "solid white",
        marginTop: "60px",
      }}
    >
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NOME</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setNome(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>IMPORTO</Form.Label>
        <Form.Control
          step={0.01}
          type="number"
          placeholder="importo"
          onChange={(e) => setImporto(parseFloat(e.target.value))}
        />
      </Form.Group>

      <Form.Label>CATEGORIA</Form.Label>
      <Form.Select
        required
        placeholder="tipo"
        as="select"
        onChange={(e) => setCategoria(e.currentTarget.value as Categoria)}
      >
        <option>seleziona</option>
        {categoriaKeys.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>

      <Button
        style={{ marginTop: "10px", marginBottom: "10px" }}
        variant="primary"
        type="submit"
      >
        aggiungi spesa
      </Button>
      </Form>
      </>
  );
}

export default FormComponent;
