import { View, Image } from "react-native"
import { useFormik } from "formik"
import { Input, Button} from "react-native-elements"
import { initialValues, validationSchema } from "./index.data"
import { getAuth,updateProfile } from "firebase/auth"
import { style } from "./index.style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Toast from "react-native-toast-message"



export function ChangeDisplayNameForm(props){
    const { onReload } = props
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (Values) => {
    try {
        const { displayName } = Values
        const currentUser = getAuth().currentUser
        await updateProfile(currentUser, { displayName })
        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: "Cambio correctamente el nombre y apellido"
        });
        onReload()
    } catch (error) {
        Toast.show({
            type: 'error',
            position: 'bottom',
            text1: "Error al Cambiar nombre y apellido"
        });
    }
}
        
        })
            return(
                <View>
                    <Input placeholder="Nombre y Apellido" 
                    rightIcon={{
                        type: "material-community",
                        name: "account-circle-outline",
                        color: "#c2c2c2"
                    }}
                    onChangeText={formik.handleChange('displayName')}
                    errorMessage={formik.errors.displayName}
                    />
             
                    <Button title="Continue"
                                    containerStyle={style.btnContainer}
                                    buttonStyle={style.btn}
                                    onPress={formik.handleSubmit}
                                    loading={formik.isSubmitting}
                                />
                   
                </View>
            )
        }
        