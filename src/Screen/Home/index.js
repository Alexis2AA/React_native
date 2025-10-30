import { ScrollView, View } from "react-native";

import { Image } from "react-native-elements";
import { style} from  "./index.style"

export default function Home() {
    return (
        <ScrollView style={style.container} >
            <View>
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
            </View>
        </ScrollView>
    );
}