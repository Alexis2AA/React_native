import { ScrollView, View } from "react-native";

import { FormLogin } from "../../components/Auth/Fornlogin";
import { Image } from "react-native-elements";
import { style} from  "./index.style"

export default function Login() {
    return (
        <ScrollView style={style.container} >
            <View>
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
            </View>
            

            <FormLogin />


        </ScrollView>
    );
}