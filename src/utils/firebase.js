// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB-yWJPaK-iamolCqWD97Ov-mtjwE6yv8",
  authDomain: "mi-app-profeshional.firebaseapp.com",
  projectId: "mi-app-profeshional",
  storageBucket: "mi-app-profeshional.firebasestorage.app",
  messagingSenderId: "733754829957",
  appId: "1:733754829957:web:73a1bbb30fa4f219c4cdec",
  measurementId: "G-PDVLYLPDWH"
};

//Inicializacion de Firebase y Auth con persistencia
let app;
let auth;

export const iniFirebase = () => {
    if (!app) {
        app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        auth = initializeAuth(app,{
            persistence: getReactNativePersistence(AsyncStorage),
        });
    }
    return {app,auth};
}