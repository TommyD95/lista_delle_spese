import axios from "axios";
import { useCallback, useState } from "react";
import { ISpesa } from "../Model/spesaModel";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const listaApi = createApi({
    reducerPath: 'lista',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    endpoints(builder) {
        return {
            addAttivita: builder.mutation<void, ISpesa>({
                query: (attivita) => {
                    return {
                        url: "/lista",
                        method: "POST",
                        body: {
                            nome: attivita.nome,
                            categoria: attivita.categoria,
                            importo:attivita.importo
                            
                        }
                    }
                }
            }),
            fetchLista: builder.query<ISpesa[],void>({
                
                query: () => {
                    return {
                        url: "/lista",
                        method:'GET'
                    }
                }
            })
        }
    },

    
})

export const { useFetchListaQuery,
    useAddAttivitaMutation } = listaApi



export  {listaApi};
/*     const [data, setData] = useState<ISpesa[]>([])
    
    const getLista = async () => {
        axios.get(API)
            .then(response => 
                setData(response.data)
            ).catch(err=>console.log(err))
    }

     
    
    return {
        getLista: useCallback(() => { getLista() }, [data]),
        data
    }*/





