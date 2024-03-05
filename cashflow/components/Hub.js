import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBell, faEye} from "@fortawesome/free-solid-svg-icons";

export default function (){
    return(
            <View style={css.hub}>
                <View style={css.user}>
                    <View style={css.nomeFoto}>
                        <Image style={css.perfil} source={require('../assets/tigrinho.jpg')} />
                        <Text style={css.textohub}>Luiz Tigrinho</Text>
                    </View>
                    <FontAwesomeIcon size={25}  color={'white'} icon={faBell} />
                </View>
                <View style={css.dinheiro}>
                    <Text style={css.valor}>R$ 1723,10</Text>
                    <FontAwesomeIcon color={'white'} size={35}  icon={faEye} />
                </View>
                <View style={css.divBtn}>
                    <Pressable style={css.btnHub}>
                        <Text style={css.textohub}>Guardar Dinheiro</Text>
                    </Pressable>
                </View>
            </View>
    )
}

const css = StyleSheet.create({
    hub: {
        height:'30%',
        width:'100%',
        backgroundColor: '#FFD60A',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
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