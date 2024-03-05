import {View, StyleSheet, Text} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faCoins, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function (){
    return(
        <View style={css.metas}>
            <View style={css.tituloMetas}>
                <Text style={css.textoMetas}>Metas Financeiras</Text>
            </View>
            <View style={css.valorMetas}>
                <Text style={css.preco}>R$3000</Text>
                <FontAwesomeIcon size={35} icon={faCoins} />
            </View>
            <View style={css.Bar}>
                <Text  style={css.preco2}>57%</Text>
                <View style={css.barra}>
                    <View style={css.barraColor}>

                    </View>
                </View>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    metas: {
        width: '90%',
        height:'30%',
    },
    tituloMetas: {
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
        width: '57%',
        height: 10,
        backgroundColor: '#FFD60A',
        borderRadius: 100
    },
    Bar: {
        flexDirection: 'row',
        alignItems: 'center',
    }

})