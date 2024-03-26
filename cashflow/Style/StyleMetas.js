import {StyleSheet} from "react-native";

export const css = StyleSheet.create({
    metas: {
        width: '90%',
        height:'30%',
    },
    tituloMetas: {
        fontSize:25,
        fontWeight:'bold'
    },
    textoMetas: {
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    preco: {
        padding: 10,
        fontSize: 35,
        fontWeight: 'bold'
    },
    preco2: {
        padding: 10,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFD60A'
    },
    valorMetas: {
        flexDirection:'row',
        alignItems: 'center'
    },
    barra: {
        width: '70%',
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 100
    },
    barraColor: {
        height: 10,
        backgroundColor: '#FFD60A',
        borderRadius: 100
    },
    Bar: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})