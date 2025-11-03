import { ScrollView, View, Image } from "react-native";
import { Text } from "react-native-elements";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { style} from  "./index.style"
import {ChangeDisplayNameForm} from "../../components/User/ChangeDisplayNameForm"

export default function Home() {
    const { displayName, email } = getAuth().currentUser
    const [_, setReload] = useState(false);

    const onReload = () => setReload((prevState) => !prevState);

    return (
        <View style={style.container} >
            <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
            <View style={style.card}>
                <Text style={style.welcomeText}>Bienvenido: {displayName || "Anonimo"}</Text>
                <Text style={style.inf}>email: {email}</Text>
                <ChangeDisplayNameForm onReload={onReload} />
            </View>
        </View>
    );
}