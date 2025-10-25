import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../Screen/Onboarding";
import { FormLogin } from "../components/Auth/Fornlogin";
import Login from "../Screen/Login";
const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Onboarding"
                screenOptions={{
                    headerStyle:{ backgroundColor: 'blue'},
                    headerTintColor: '#ffff',
                    headerTitleAlign: 'center',
                }}
                >
                    
                    <Stack.Screen
                        name="Onboarding"
                        component={Onboarding}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Login" 
                        component={Login}
                        options={{ title: 'Registro'}}
                    />

                 

                </Stack.Navigator>
        </NavigationContainer>
    );
}
