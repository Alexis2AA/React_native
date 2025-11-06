import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop:70,
    },
    
    textboton: {
        width:"95%",
        backgroundColor: "blue",
        marginTop:20,
        marginLeft:10,
        borderRadius: 12,
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        textAlign: "center",
        fontWeight: "700",
    },
    card:{
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000000ff",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
    },
    btnContainer:{
        marginTop: 20,
        width:"95%",
        alignSelf:"center"
    },
    btn:{
        backgroundColor: "blue",
        borderRadius: 12,
    },


     btTitle:{
        color: '#000000ff',
    },
    welcomeText:{
        fontSize: 24,
        fontWeight: "700",
        color: "#1a1a1aff",
        marginBottom: 10,
        textAlign: "center"
    },
    inf:{
        fontSize: 16,
        color: "#434343ff",
        textAlign: "center",
        marginBottom: 15,    },

    image:{
        resizeMode: "contain",
        width: "100%",
        height: 320,
        marginTop: -70,
    },
    
    
})