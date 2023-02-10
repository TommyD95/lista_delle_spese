import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IComune } from "../Model/comuneModel";
import { IUser } from "../Model/userModel";





function GeneralForm() {
  const [nome, setNome] = useState<string>("");
  const [cognome, setCognome] = useState<string>("");
  const [indirizzo, setIndirizzo] = useState<string>("");
  const [comune, setComune] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [regione, setRegione] = useState<string>("");

  const [comuni, setComuni] = useState<IComune[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/comuni")
      .then((response) => response.json())
      .then((response) => setComuni(response))
      .catch((err) => console.error(err));
  }, []);

  const reset = () => {
    setNome("");
    setCognome("");
    setIndirizzo("");
    setEmail("");
    setCognome("");
    setComune("");
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: IUser = {
      nome,
      cognome,
      email,
      indirizzo,
      comune,
        provincia: comuni.find((com: IComune) => com.comune == comune)!.den_prov,
      regione: comuni.find((com: IComune) => com.comune == comune)!.den_reg
    };

    console.log(user);
    reset();
  };

  return (
    <>
      <h2 style={{ color: "white", marginTop: "50px" }}>
        Inserisci i tuoi dati
      </h2>
      <Form
        onSubmit={submit}
        style={{
          fontSize: "10pt",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          width: "70%",
          height: "auto",
          color: "white",
          marginTop: "50px",
          border: "solid #3B71CA 2px",
          marginLeft: "15%",
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nome</Form.Label>
          <Form.Control
            required
            value={nome}
            type="text"
            placeholder="name"
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>cognome</Form.Label>
          <Form.Control
            required
            value={cognome}
            type="text"
            placeholder="cognome"
            onChange={(e) => setCognome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>e-mail</Form.Label>
          <Form.Control
            required
            value={email}
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>indirizzo</Form.Label>
          <Form.Control
            value={indirizzo}
            required
            type="text"
            placeholder="indirizzo"
            onChange={(e) => setIndirizzo(e.target.value)}
          />
        </Form.Group>

        <Form.Label>comune</Form.Label>
        <Form.Select
          required
          value={comune}
          placeholder="comune"
          as="select"
          onChange={(e) => setComune(e.currentTarget.value)}
        >
          <option>comune...</option>
          {comuni.map((cat: IComune) => (
            <option key={cat.pro_com_t} value={cat.comune}>
              {cat.comune}
            </option>
          ))}
        </Form.Select>

        <Button
          style={{ marginTop: "50px" }}
          variant="primary"
          type="submit"
        >
          GeneralForm submit
        </Button>
      </Form>
    </>
  );
}

export default GeneralForm;
