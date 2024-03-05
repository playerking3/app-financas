import {View, StyleSheet, Text, Image} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBell, faEye} from "@fortawesome/free-solid-svg-icons";

export default function (){
    return(
            <View style={css.hub}>
                <View style={css.user}>
                    <View>
                        <Text style={css.textohub}>Murilo Marques</Text>
                    </View>
                    <FontAwesomeIcon size={25} color={'white'} icon={faBell} />
                </View>
                <View style={css.dinheiro}>
                    <Text style={css.valor}>R$ 1723,10</Text>
                    <FontAwesomeIcon color={'white'} size={35}  icon={faEye} />
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
        borderBottomLeftRadius: 30
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
    }
})