import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ISpesa } from "../Model/spesaModel";
import { IFormVisibility } from "../pages/Lista";
import { useEliminaAttivitaMutation } from "../Store/store";
import FormModifica from "./FormModifica";

type IProps = {
    setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    data: ISpesa;
}

function BaseCard({setShowModal,data}:IProps) {

    const [eliminaAttivita,eliminaResult] = useEliminaAttivitaMutation();

    const [showFormModifica, setShowFormModifica] = useState<IFormVisibility>({});


    const onClickElimina = (data: ISpesa) => {
        eliminaAttivita(data);
        setShowModal(true)
    };
    


    const onClickModifica = (index: number) => {
        setShowFormModifica({ ...showFormModifica, [index]: !showFormModifica[index] });
      };

    return ( 
        <>
         <Card
            className=""
            key={data?.id}
            style={{
              color: "white",
              width: "100%",
              backgroundColor: "#282c34",
              border: "solid  #3B71CA",
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
                variant="danger"
                onClick={() => onClickElimina(data)}
              >
                elimina
              </Button>
              <Button
                variant="warning"
                onClick={() => onClickModifica(data.id!)}
              >
                modifica
              </Button>
              {showFormModifica[data.id!] && <FormModifica data={data} showFormModifica={showFormModifica} setShowFormModifica={ setShowFormModifica} />}
            </Card.Body>
          </Card>
        </>
     );
}

export default BaseCard;