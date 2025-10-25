// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNavtivePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqpbg_m4Z0HQyq00PR6ERZ8U8n779rY68",
  authDomain: "proyecton1-f6d66.firebaseapp.com",
  projectId: "proyecton1-f6d66",
  storageBucket: "proyecton1-f6d66.firebasestorage.app",
  messagingSenderId: "120752002179",
  appId: "1:120752002179:web:ad737b983d4c95891cb7b6",
  measurementId: "G-YPE3VNEPYW"
};

//Inicializacion de Firebase y Auth con persistencia
let app;
let auth;

export const iniFirebase = () => {
    if (!app) {
        app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        auth = initializeAuth(app,{
            persistence: getReactNavtivePersistence(AsyncStorage),
        });
    }
    return {app,auth};
}