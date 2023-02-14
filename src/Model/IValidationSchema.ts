import { IComune } from "./comuneModel";

export interface IValidationSchema{
    nome: string,
    cognome: string,
    indirizzo: string,
    email: string,
    comune: string,
    regione:string
}