import {StyleSheet} from "react-native";

export const css = StyleSheet.create({
    hub: {
        height:'30%',
        width:'100%',
        backgroundColor: '#FFD60A',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        zIndex:2
    },
    nomeFoto: {
        flexDirection:'row',
        alignItems:'center',
        gap:15,
    },
    user: {
        height: '30%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    valor: {
        fontSize: 35,
        color: 'white',
        fontWeight:'bold'
    },
    textohub: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    dinheiro: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop:25,
        gap:10
    },
    perfil: {
        width:50,
        height:50,
        borderRadius: 1000
    },
    divBtn: {
        alignItems:'center',
        justifyContent: 'center',
        height: '35%'
    },
    btnHub: {
        padding:10,
        backgroundColor:'rgba(152,126,2,0.35)',
        borderRadius: 20
    }
})