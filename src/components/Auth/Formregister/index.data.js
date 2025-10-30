import * as Yup from "yup";

export function initialValues() {
    return{
        email: "",
        nombre: "",
        contraseña: "",
        confirContraseña: "",

    }
    
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
        .email("El email no es valida")
        .required("El mail es obligatoria"),
        nombre: Yup.string()
        .required("El nombre es obligatoria"),
        contraseña: Yup.string()
        .min(8,"La contraseña debe tener minimo 8 caracteres")
        .matches(/[A-Z]/,"Debe contener una mayuscula")
        .matches(/[a-z]/,"Debe contener una minuscula")
        .required("La contraseña es obligatoria"),
        confirContraseña:Yup.string()
        .min(8,"La contraseña debe tener minimo 8 caracteres")
        .matches(/[A-Z]/,"Debe contener una mayuscula")
        .matches(/[a-z]/,"Debe contener una minuscula")
        .required("La contraseña es obligatoria"),


    });
}