import { Spinner, Button, Card } from "react-bootstrap";
import {
  useFetchListaQuery,
  useEliminaAttivitaMutation,
  useModificaAttivitaMutation,
} from "./Hooks/chiamateAPI";
import { Categoria, ISpesa } from "./Model/spesaModel";
import './App.css';


function Lista() {
  const { data, error, isLoading } = useFetchListaQuery();
  const [eliminaAttivita, eliminaResult] = useEliminaAttivitaMutation();
  const [modificaAttivita, modificaResult] = useModificaAttivitaMutation();

  let content;

  if (isLoading) {
    content = <Spinner animation="grow" variant="light" />;
  } else if (error) {
    content = <div>error..</div>;
  } else {
    console.log(data)
    content =
      <div>
        
        {data?.map((data: ISpesa) => (
          
          <Card className='' key={data?.id} style={{  color: "white",
          width:"100%",
            backgroundColor: "#282c34",
            border: 'solid  white',
            marginTop:'25px'
          }}>
            
            <Card.Body>
              
              <Card.Title>spesa n°{data.id}</Card.Title>
              
              <Card.Text className="text">
              
                nome: {data.nome}
                <br />
                importo: {data.importo}
                <br />
                categoria: {data.categoria}
              </Card.Text>
              
             <Button variant="primary" onClick={()=>eliminaAttivita(data)}>elimina</Button>
              {/* <Button variant="primary" onClick={() => modificaAttivita({
                    id: data.id,
                    nome: "preservativi",
                    categoria: Categoria.Svago,
                    importo: 5,
              })}>modifica</Button> */}
              
            </Card.Body>
          </Card>
        )
        )}
      </div>;

    
  }
  return <>{(data && data.length==0) ? <h3 style={{color:'whitesmoke'}}>nessun elemento</h3> : content}</>;
}

export default Lista;
