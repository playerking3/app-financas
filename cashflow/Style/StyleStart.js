import {StyleSheet} from "react-native";

export const css = StyleSheet.create({
    logo:{
        width: '100%',
        height:'70%',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color:'#FFD60A',
        fontWeight:'bold',
        fontSize: 50
    },
    btnEntrar: {
        backgroundColor: '#FFD60A',
        padding: 20,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius: 20,
        borderBottomLeftRadius:20
    },
    textEntrar: {
        color: 'white',
        fontSize:25
    }
})