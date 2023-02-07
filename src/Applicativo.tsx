import { useCallback, useEffect, useState } from "react";
import  useChiamateAPI  from "./Hooks/chiamateAPI";
import { ISpesa } from "./Model/spesaModel";
import './App.css';

function Applicativo() {

  const { getLista,data } = useChiamateAPI();


  

  useEffect(() => {
    getLista()
  }, [])
   
    
    

    return ( 
        <div className="App">
      <header className="App-header text">
          <div>{data.map((data) => <div>{ data.importo}</div>)}</div>
      </header>
    </div>
     );
}

export default Applicativo;