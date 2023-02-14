import { ucs2 } from "punycode";
import { useEffect, useState, useCallback, FocusEventHandler, FocusEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { ValidationError } from "yup";
import { IComune } from "../Model/comuneModel";
import { IUser } from "../Model/userModel";
import { validationSchema } from "../SchemaYup";

interface IErrors {
  message: string;
  valid: boolean;
  path: string;
}
export interface ITouched {
  [key: string]: boolean;
}

function GeneralForm() {
  const [comuni, setComuni] = useState<IComune[]>([]);
  const [errors, setErrors] = useState<IErrors[]>([]);
  const [isTouched, setIsTouched] = useState<ITouched>({});
  const [user, setUser] = useState<IUser>({
    nome: "",
    cognome: "",
    comune: "",
    email: "",
    indirizzo: "",
    regione: "",
    provincia: "",
  });

  const fetcha = useCallback(() => {
    fetch("http://localhost:3001/comuni")
      .then((response) => response.json())
      .then((response) => setComuni(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetcha();
  }, [fetcha]);

  /*  useEffect(() => {
    validationSchema
      .validate(user, { abortEarly: false })
      .then(() => setErrors([]))
      .catch((err: ValidationError) => {
        let array: IErrors[] = [];
        err.inner.forEach((e) => {
          array.push({ message: e.message, valid: false, path: e.path! });
        });
        setErrors(array);
      });
  }, [user]);
 */
  const reset = () => {
    setUser({
      nome: "",
      cognome: "",
      comune: "",
      email: "",
      indirizzo: "",
      regione: "",
      provincia: "",
    });
  };

  
  const onBlur = (event: FocusEvent<HTMLInputElement> ) => {
    validationSchema
      .validate(user, { abortEarly: false })
      .then(() => setErrors([]))
      .catch((err: ValidationError) => {
        let array: IErrors[] = [];
       
        const eventPath = event.target.name;

        setIsTouched({...isTouched, [eventPath]:true})
        
        err.inner.forEach((e) => {
          array.push({ message: e.message, valid: false, path: e.path!});
          
        });
        setErrors(array);
      });
  };
  const onBlurSelect = (event: FocusEvent<HTMLSelectElement> ) => {
    validationSchema
      .validate(user, { abortEarly: false })
      .then(() => setErrors([]))
      .catch((err: ValidationError) => {
        let array: IErrors[] = [];

        console.log(event.target.name);
        
       
        if (event.target.name === "comune") {
          const eventPath = event.target.name
          setIsTouched({ ...isTouched, [eventPath]: true });
         
        } else {
          alert('errore')
        }

        
        
        err.inner.forEach((e) => {
          array.push({ message: e.message, valid: false, path: e.path!});
          
        });
        setErrors(array);
      });
  };
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.currentTarget;
      setUser((prev) => ({
        ...prev,
        [name]: value,
        provincia: comuni.find((com: IComune) => com.comune == value)?.den_prov ?? "",
        regione: comuni.find((com: IComune) => com.comune == value)?.den_reg ?? "",
      }));
    },
    [comuni]
  );

  /* const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setUser((prev) => ({
      ...prev,
      [name]: value,
      provincia: comuni.find((com: IComune) => com.comune == value)!.den_prov,
      regione: comuni.find((com: IComune) => com.comune == value)!.den_reg,
    }));
  }; */

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
  };

  const renderError = (path: string) => {
    const erroreTrovato = errors.find((err) => err.path == path);
    
    return (
      erroreTrovato && isTouched[path] && (
        <div style={{ color: "red" }}>{erroreTrovato.message}</div>
      )
    );
  };

  return (
    <>
      <h2 style={{ color: "white", marginTop: "50px" }}>
        Inserisci i tuoi dati
      </h2>
      <Form
        noValidate
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
            onBlur={onBlur}
            required
            name="nome"
            value={user.nome}
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
        </Form.Group>
        {renderError("nome")}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>cognome</Form.Label>
          <Form.Control
            required
            onBlur={onBlur}
            name="cognome"
            value={user.cognome}
            type="text"
            placeholder="cognome"
            onChange={handleChange}
          />
        </Form.Group>
        {renderError("cognome")}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>e-mail</Form.Label>
          <Form.Control
            required
            onBlur={onBlur}
            name="email"
            value={user.email}
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
        </Form.Group>
        {renderError("email")}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>indirizzo</Form.Label>
          <Form.Control
            
            onBlur={onBlur}
            name="indirizzo"
            value={user.indirizzo}
            required
            type="text"
            placeholder="indirizzo"
            onChange={handleChange}
          />
        </Form.Group>
        {renderError("indirizzo")}

        <Form.Label>comune</Form.Label>
        <Form.Select
          onBlur={onBlurSelect}
          required
          name="comune"
          value={user.comune}
          placeholder="comune"
          as="select"
          onChange={handleSelectChange}
        >
          <option value="">comune...</option>
          {comuni.map((cat: IComune) => (
            <option key={cat.pro_com_t} value={cat.comune}>
              {cat.comune}
            </option>
          ))}
        </Form.Select>
        {renderError("comune")}

        <Button style={{ marginTop: "50px" }} variant="primary" type="submit">
          GeneralForm submit
        </Button>
      </Form>
    </>
  );
}

export default GeneralForm;
