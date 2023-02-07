import { useCallback, useEffect, useState } from "react";
import   { useAddAttivitaMutation, useFetchListaQuery }  from "./Hooks/chiamateAPI";
import { ISpesa } from "./Model/spesaModel";
import './App.css';

function Applicativo() {

  const { data, error, isLoading } = useFetchListaQuery();

  const [addAttivita, results] = useAddAttivitaMutation();

  let content;

  if (isLoading) {
    content=<div>is Loading...</div>
  } else if (error) {
    content=<div>eror..</div>
  } else {
    content = <div>{data?.map((data: ISpesa) => <div>nome: {data.nome} <br /> id:{ data.id}</div>)}</div>
  }

  return ( 
        <div className="App">
      <header className="App-header text">
          {content}
          <button onClick={()=>addAttivita({
    categoria: "casa",
    importo: 2500,
    nome:"droga"})}>clicca</button>
      </header>
    </div>
     );
}

export default Applicativo;