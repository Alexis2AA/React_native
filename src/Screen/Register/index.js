import { ScrollView, View } from "react-native";

import { FormRegister } from "../../components/Auth/Formregister";
import { Image } from "react-native-elements";
import { style} from  "./index.style"

export default function Register() {
    return (
        <ScrollView style={style.container} >
            <View>
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
            </View>
            

            <FormRegister />


        </ScrollView>
    );
}