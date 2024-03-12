import {StyleSheet} from "react-native";

export const css = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
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
    entrar: {
        width:'100%',
        height:'30%',
        backgroundColor:'#d5d5d5',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        justifyContent:'center',
        alignItems:'center'
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