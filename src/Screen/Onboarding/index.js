import { ScrollView, View } from "react-native";
import { Button } from "react-native-elements";
import { Image } from "react-native-elements";
import { style} from  "./index.style"
import { useNavigation } from "@react-navigation/native";
export default function Onboarding() {
    const navigation = useNavigation();
    return (
        <ScrollView style={style.container} >
            <View>
                <Image source={require("../../../assets/img/icono.png")} style={style.image} />   
            <Button
                title="Log in"
                containerStyle={style.btnContainer}
                buttonStyle={style.btn}
                onPress={() => navigation.navigate('Login')} //login 
            />
            <Button
                title="Register"
                containerStyle={style.btnContainer}
                buttonStyle={style.btn}
                onPress={() => navigation.navigate('Register')} 
            />
            <Button
                title="Enter a guest"
                containerStyle={style.btnContainer}
                buttonStyle={style.guest}
                titleStyle={style.btTitle}
                onPress={() => navigation.navigate('Home')} 
                
            />
        </View>

        </ScrollView>
    );
}