import { View, Image } from "react-native";
import { Button } from "react-native-elements";
import { Text } from "react-native-elements";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { style} from  "./index.style"
import {ChangeDisplayNameForm} from "../../components/User/ChangeDisplayNameForm"
import { useNavigation } from "@react-navigation/native";


export default function Home({ onReloadLogin }) {
    const navigation = useNavigation();
    const user = getAuth().currentUser;
    const displayName = user?.displayName ?? 'Anonimo';
    const email = user?.email ?? '';
    const [_, setReload] = useState(false);

    const onReload = () => setReload((prevState) => !prevState);

    const logout = async () => {
        try {
            const auth = getAuth();
            
            await auth.signOut();

            navigation.reset({
                index : 0,
                routes : [{ name : 'Onboarding'}],

            });
        } catch (error) {
            console.error('Error al cerra sesión:', error)
        }
    }
       

    return (
        <View style={style.container} >
            <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
            <View style={style.card}>
                <Text style={style.welcomeText}>Bienvenido: {displayName || "Anonimo"}</Text>
                <Text style={style.inf}>Email: {email}</Text>
                
                {email !== '' ? (
                    <View>
                        <ChangeDisplayNameForm onReload={onReload} />
                        <Text style={style.textboton} onPress={logout}>Cerrar Sesión</Text>
                    </View>
                    ) : (
                    <Button
                        title="Onboardings"
                        containerStyle={style.btnContainer}
                        buttonStyle={style.btn}
                        onPress={() => navigation.navigate('Onboarding')}
                    />
                    )}

            </View>
        </View>
    );
}
/* Antes de un Text onPress puede ser
<Button
    title="Cerrar Sesión"
    onPress={logout}
    /> 
*/