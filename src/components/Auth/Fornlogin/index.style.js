import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    input:{
        width: "100%",
        marginTop: 20,
    },
    icon:{
        color: "#c74f4fff"
    },
    btnContainer:{
        borderRadius: 12,
        marginTop: 25,
        width:"95%",
        alignSelf:"center"
    },
    btn:{
        backgroundColor: "blue"
    },
    container:{
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0,
        marginTop: -70,
    },
    black1: {
    backgroundColor: "black",
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    paddingHorizontal: 20,
  },

    whiter1:{
        backgroundColor:"white",
        borderRadius: 12,
    },
         btTitle:{
        color: '#000000ff',
        
    },
    icon:{
        width: 30,
    height: 30,
    resizeMode: "contain",
    position: "absolute", 
    left: 20, 
  },
})