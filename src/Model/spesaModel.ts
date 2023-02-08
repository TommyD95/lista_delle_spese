 export interface ISpesa{
    id?: number,
    nome: string,
    categoria:Categoria,
    importo:number
}

export enum Categoria {
    Cibo = "cibo",
    Svago = "svago",
    Formazione = "formazione",
    Casa = "casa"
  }



