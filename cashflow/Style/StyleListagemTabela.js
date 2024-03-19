import {StyleSheet} from "react-native";

export const css = StyleSheet.create({
    linha: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    texto:{
        fontSize: 16
    },

    linhaBtn: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "center"
    },
    btn:{
        backgroundColor: '#FFD60A',
        paddingHorizontal: 10,
        borderRadius: 20
    },
    btnTexto: {
        color: 'white',
        fontSize: 20
    }
})