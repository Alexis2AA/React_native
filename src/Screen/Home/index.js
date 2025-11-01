import { ScrollView, View } from "react-native";
import { Text } from "react-native-elements";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { Image } from "react-native-elements";
import { style} from  "./index.style"
import {ChangeDisplayNameForm} from "../../components/User/ChangeDisplayNameForm"

export function Home() {
    const { displayName, email } = getAuth().currentUser
    const [_, setReload] = useState(false);

    const onReload = () => setReload((prevState) => !prevState);

    return (
        <ScrollView style={style.container} >
            <View>
                <Text>Bienvenido: {displayName || "Anonimo"}</Text>
                <Text>email: {email}</Text>
                <ChangeDisplayNameForm onReload={onReload} />
            </View>
        </ScrollView>
    );
}