import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Categoria, ISpesa } from "../Model/spesaModel";
import { IFormVisibility } from "../pages/Lista";
import { useModificaAttivitaMutation } from "../Store/store";



type IProps = {
  data: ISpesa,
  setShowFormModifica: React.Dispatch<React.SetStateAction<IFormVisibility>>,
  showFormModifica:IFormVisibility
};

function FormModifica({ data,setShowFormModifica,showFormModifica }: IProps) {

  const [nome, setNome] = useState<string>("");
  const [importo, setImporto] = useState<number>(0);
  const [categoria, setCategoria] = useState<Categoria>(Categoria.Casa);

  const categoriaKeys = Object.values(Categoria);

  const [modificaAttivita, modificaResult] = useModificaAttivitaMutation();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const simulaAttivita: ISpesa = {
      id: data?.id,
      nome,
      importo,
      categoria,
    };

    modificaAttivita(simulaAttivita);
    setShowFormModifica({...showFormModifica,[data.id!]:false})
  };

  return (
    <>
      <Form
        onSubmit={submit}
        style={{
          fontSize: "10pt",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          width: "100%",
          color: "white",
          marginTop: "20px",
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
          modifica spesa
        </Button>
      </Form>
    </>
  );
}

export default FormModifica;
