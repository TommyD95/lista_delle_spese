import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useAddAttivitaMutation } from "./Hooks/chiamateAPI";
import { Categoria, ISpesa } from "./Model/spesaModel";

function FormComponent() {

    const [addAttivita, addResult] = useAddAttivitaMutation();

    const [nome, setNome] = useState<string>('');
    const [importo, setImporto] = useState<number>(0);
    const [categoria, setCategoria] = useState<Categoria>(Categoria.Casa);

    const categoriaKeys = Object.values(Categoria);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const simulaAttivita: ISpesa = {
            nome,
            importo,
            categoria
            
        }

        addAttivita(simulaAttivita);
    }

    return (
        <Form  onSubmit={submit} style={{}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nome</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setNome(e.target.value) } />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>importo</Form.Label>
                <Form.Control step={0.01} type="number" placeholder="importo" onChange={(e)=>setImporto(parseFloat(e.target.value)) } />
            </Form.Group>
            
            
            <Form.Label>categoria</Form.Label>
            <Form.Select required placeholder="tipo" as="select" onChange={(e) => setCategoria(e.currentTarget.value as Categoria
            )}>
                <option>seleziona</option>
                {categoriaKeys.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
              </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
                    </Form>
    )
     ;
}

export default FormComponent;