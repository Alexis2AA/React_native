import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../Screen/Onboarding";
import Register from "../Screen/Register";
import Login from "../Screen/Login";
import Home from "../Screen/Home";
import  FirtView  from "../Screen/FirstView";
const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="FirtView"
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
                        initialParams={{ onRealoadLogin : null}}
                         options={{
                            title: 'Log in',
                            headerTintColor: '#0300b0ff',
                            headerStyle: {
                            backgroundColor: '#ffffffff', 
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Register" 
                        component={Register}
                         options={{
                            title: 'Register',
                            headerTintColor: '#0300b0ff',
                            headerStyle: {
                            backgroundColor: '#ffffffff', 
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Home" 
                        component={Home}
                         options={{
                            title: 'Home',
                            headerTintColor: '#0300b0ff',
                            headerStyle: {
                            backgroundColor: '#ffffffff', 
                            },
                        }}
                    />
                    <Stack.Screen
                        name="FirtView" 
                        component={FirtView}
                        options={{ headerShown: false }}
                    />

                 

                </Stack.Navigator>
        </NavigationContainer>
    );
}
