import * as Yup from "yup";

export function initialValues(){
 return {
    displayName: "",
 }   
}

export function validationSChema(){
    return Yup.object({
        displayName: Yup.string().required("El nombre es obligatorio")
    })
}