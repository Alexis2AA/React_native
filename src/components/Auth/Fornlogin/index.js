import { View , Image} from "react-native"
import { useState } from "react"
import { useFormik } from "formik"
import { Input, Button} from "react-native-elements"
import { initialValues, validationSchema } from "./index.data"
import { style } from "./index.style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export function FormLogin(){
    

    const navigation = useNavigation()

    const [showPassword, setShowPassword] = useState(false)
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try{
                const { email, password } = formValue;

                const emailNormalizado = email.trim().toLowerCase();
                const contraNormalizado = password.trim().toLowerCase();
                if (emailNormalizado == "alexis@gmail.com" && contraNormalizado =="alexis123"){
                    Toast.show({
                    type:'success',
                    position:'bottom',
                    text1:"Inicio de session exitos"
                    
                });
                navigation.navigate('Home')
                console.log(formValue)
                }else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: "Gmail o contraseña incorrecto"
            });
            console.log("Datos incorrectos:", formValue);
        }
    
            } catch (error) {
                Toast.show({
                    type:'error',
                    position:'bottom',
                    text1:"Usuario o Contraseña incorrecta"
                })
                console.log(error)
            }
        }
    })
    const functionShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return(
        
        <View style={style.container}>
            <Input placeholder="Email" 
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

            <Input placeholder="Password"
            secureTextEntry={!showPassword}
            containerStyle={style.input}
            onChangeText={(text) => formik.setFieldValue("password",text)}
            rightIcon={
                <MaterialCommunityIcons type="material-community"
                size={20}
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={ style.icon}
                onPress={functionShowPassword}
                />
            }
            errorMessage={formik.errors.password}
            />

            <Button title="Iniciar Sesion"
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
                    source={require('../../../../assets/img/apple.jpeg')} // tu imagen local
                    style={style.icon}
                    />
                }
                />
        </View>
    )
}
