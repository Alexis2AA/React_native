import { LogBox } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";
import { iniFirebase } from "./src/utils/firebase";
import Toast from "react-native-toast-message";

// Inicializa Firebase
iniFirebase();
LogBox.ignoreAllLogs //Quita los Toast de la app que vengan por la consola*
export default function App() {
  return (
    <>
    <AppNavigation />
    <Toast />
    </>
  );
  
}