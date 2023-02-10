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
import BaseCard from "../components/BaseCard";

export interface IFormVisibility {
  [key: number]: boolean;
}

function Lista() {
  const { data, error, isLoading } = useFetchListaQuery();

  const [showFormModifica, setShowFormModifica] = useState<IFormVisibility>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  

  let content;

 

  if (isLoading) {
    content = <Spinner animation="grow" variant="light" />;
  } else if (error) {
    content = <div>error..</div>;
  } else {
    content = (
      <div>
        {data?.map((data: ISpesa) => (
         <BaseCard key={data.id} data={data} setShowModal={setShowModal}  />
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
