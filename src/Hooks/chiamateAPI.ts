import axios from "axios";
import { useCallback, useState } from "react";
import { ISpesa } from "../Model/spesaModel";
import {createApi, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta} from "@reduxjs/toolkit/query/react"
import { ResultDescription } from "@reduxjs/toolkit/dist/query/endpointDefinitions";






const listaApi = createApi({
    reducerPath: 'lista',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),

    tagTypes: ['Lista'],
    
    endpoints(builder) {

        return {
            modificaAttivita: builder.mutation<void, ISpesa>({
                invalidatesTags:['Lista'],
                query: (attivita) => {
                    return {
                        url: `/lista/${attivita.id}`,
                        method: 'PUT',
                        body: {
                            nome: attivita.nome,
                            categoria: attivita.categoria,
                            importo:attivita.importo
                        }
                    }
                }
            }),
            eliminaAttivita: builder.mutation<void, ISpesa>({
                invalidatesTags:['Lista'],
                query: (attivita) => {
                    return {
                        url: `/lista/${attivita.id}`,
                        method:'DELETE',
                    }
                }
            }),
            addAttivita: builder.mutation<void, ISpesa>({
                invalidatesTags:['Lista'],
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
                providesTags:['Lista'],
                
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
    useAddAttivitaMutation,useEliminaAttivitaMutation,useModificaAttivitaMutation } = listaApi



export  {listaApi};






