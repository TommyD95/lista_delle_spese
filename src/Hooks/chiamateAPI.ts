import axios from "axios";
import { useCallback, useState } from "react";
import { ISpesa } from "../Model/spesaModel";

const useChiamateAPI = () => {
    const API = "http://localhost:3001/lista";
    const [data, setData] = useState<ISpesa[]>([])
    
    const getLista = async () => {
        axios.get(API)
            .then(response => 
                setData(response.data)
            ).catch(err=>console.log(err))
    }

     
    
    return {
        getLista: useCallback(() => { getLista() }, [data]),
        data
    }
}

export default useChiamateAPI;