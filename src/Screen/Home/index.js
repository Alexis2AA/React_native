import { View } from "react-native";
import { Button } from "react-native-elements";
import { style } from "./index.style";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation();

    return (
        <Text></Text>
        /* Tambien podia usar un texto para enter a guest 
        <Text onPress={() => navigation.navigate('')}>Enter a guest</Text>*/

    );
}
