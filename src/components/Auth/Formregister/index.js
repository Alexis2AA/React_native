import { View, Image } from "react-native"
import { useState } from "react"
import { useFormik } from "formik"
import { Input, Button} from "react-native-elements"
import { initialValues, validationSchema } from "./index.data"
import { style } from "./index.style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Toast from "react-native-toast-message"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


export function FormRegister(){
    const [showPassword, setShowPassword] = useState(false)
    const [showConfimPassword, setShowConfirmPassword] = useState(false)
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
    try {
        if (formValue.contraseña === formValue.confirContraseña){
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, formValue.email, formValue.contraseña)
        }
    } catch (error) {
        Toast.show({
            type: 'error',
            position: 'bottom',
            text1: "Error al registrar el usuario"
        });
        console.log("Error:", error);
    }
}

    })
    const functionShowPassword = () => { 
        setShowPassword(!showPassword)
        
    }
    const functionConfirmShowPassword = () => { 
        setShowConfirmPassword(!showPassword)
        
    }
    return(
        <View style={style.container}>
            <Input placeholder="Usuario" 
            containerStyle={style.input}
            onChangeText={(text) => formik.setFieldValue("nombre",text)}
            rightIcon={
                <MaterialCommunityIcons type="material-community"
                size={20}
                name="account"
                iconStyle={ style.icon}
                />
            }
            errorMessage={formik.errors.nombre}
            />
           
            <Input placeholder="Correo electronico" 
            containerStyle={style.input}
            onChangeText={(text) => formik.setFieldValue("email",text)}
            rightIcon={
                <MaterialCommunityIcons type="material-community"
                size={20}
                name="at"
                iconStyle={ style.icon}
                />
            }
            errorMessage={formik.errors.email}
            />

            <Input placeholder="Contraseña"
            secureTextEntry={!showPassword}
            containerStyle={style.input}
            onChangeText={(text) => formik.setFieldValue("contraseña",text)}
            rightIcon={
                <MaterialCommunityIcons type="material-community"
                size={20}
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={ style.icon}
                onPress={functionShowPassword}
                />
            }
            errorMessage={formik.errors.contraseña}
            />

            <Input placeholder="Confirmar Contraseña"
            secureTextEntry={!showPassword}
            containerStyle={style.input}
            onChangeText={(text) => formik.setFieldValue("confirContraseña",text)}
            rightIcon={
                <MaterialCommunityIcons type="material-community"
                size={20}
                name={showConfimPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={ style.icon}
                onPress={functionConfirmShowPassword}
                />
            }
            errorMessage={formik.errors.confirContraseña}
            />



            <Button title="Continue"
                containerStyle={style.btnContainer}
                buttonStyle={style.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
             <Button title="Log in with Google"
                        titleStyle={style.btTitle}
                            containerStyle={style.btnContainer}
                            buttonStyle={style.whiter1}
                            icon={
                                    <Image
                                    source={require('../../../../assets/img/google.png')} // tu imagen local
                                    style={style.icon}
                                    />
                            }
                            />
                        <Button
                            title="Log in with Apple"
                            containerStyle={style.btnContainer}
                            buttonStyle={style.black1}
                            titleStyle={style.title}
                            icon={
                                <Image
                                source={require('../../../../assets/img/apple.jpeg')}
                                style={style.icon}
                                />
                            }
                            />
        </View>
    )
}
