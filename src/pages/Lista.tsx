import { Spinner, Button, Card, Alert, Modal } from "react-bootstrap";
import {
  useFetchListaQuery,
  useEliminaAttivitaMutation,
  useModificaAttivitaMutation,
} from "../Hooks/chiamateAPI";
import { Categoria, ISpesa } from "../Model/spesaModel";
import "../App.css";
import { useState } from "react";
import FormModifica from "../components/FormModifica";
import BaseModal from "../components/BaseModal";

function Lista() {
  const { data, error, isLoading } = useFetchListaQuery();
  const [eliminaAttivita, eliminaResult] = useEliminaAttivitaMutation();
  const [modificaAttivita, modificaResult] = useModificaAttivitaMutation();

  const [showFormMOdifica, setShowFormModifica] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickElimina = (data: ISpesa) => {
    eliminaAttivita(data);
    setShowModal(!showModal);
  };

  let content;

  if (isLoading) {
    content = <Spinner animation="grow" variant="light" />;
  } else if (error) {
    content = <div>error..</div>;
  } else {
    content = (
      <div>
        {data?.map((data: ISpesa) => (
          <Card
            className=""
            key={data?.id}
            style={{
              color: "white",
              width: "100%",
              backgroundColor: "#282c34",
              border: "solid  white",
              marginTop: "25px",
  
            }}
          >
            <Card.Body>
              <Card.Title>spesa n°{data.id}</Card.Title>

              <Card.Text className="text">
                nome: {data.nome}
                <br />
                importo: {data.importo}
                <br />
                categoria: {data.categoria}
              </Card.Text>

              <Button
                style={{ marginRight: "10px" }}
                variant="primary"
                onClick={() => onClickElimina(data)}
              >
                elimina
              </Button>
              <Button
                variant="primary"
                onClick={() => setShowFormModifica(!showFormMOdifica)}
              >
                modifica
              </Button>
              {showFormMOdifica && (
                <FormModifica
                  data={data}
                  showFormMOdifica={showFormMOdifica}
                  setShowFormModifica={setShowFormModifica}
                />
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <>
      {data && data.length == 0 ? (
        <h3 style={{ color: "whitesmoke", marginTop: "50px" }}>
          nessun elemento
        </h3>
      ) : (
        content
      )}

      <BaseModal
        title={"spesa eliminata"}
        body={"spesa eliminata con successo!"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default Lista;
