import * as Yup from "yup";
import { IValidationSchema } from "./Model/IValidationSchema";





export const validationSchema = Yup.object<IValidationSchema>({
    nome: Yup.string().required("Il nome è obbligatorio").matches(/^[a-zA-Z]+$/,'solo lettere'),
    cognome: Yup.string().required("Il cognome è obbligatorio").matches(/^[a-zA-Z]+$/,'solo lettere'),
    email: Yup.string().email("email non valida").required("L'email è obbligatoria"),
    indirizzo: Yup.string().required("L'indirizzo è obbligatorio"),
    comune:Yup.string().required("Il comune è obbligatorio")
})



/* {
    nome: Yup.string().required("Il nome è obbligatorio"),
    cognome: Yup.string().required("Il cognome è obbligatorio"),
    email: Yup.string().email("email non valida").required("L'email è obbligatoria"),
    indirizzo: Yup.string().required("L'indirizzo è obbligatorio"),
    comune:Yup.string().required("Il comune è obbligatorio").test("comune","seleziona un comune",(value)=>c)
} */