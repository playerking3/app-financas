import {View, StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function (){
    return(
            <View style={css.hub}>
                <View style={css.user}>
                    <View>
                        <Text style={css.nome}>Murilo Marques</Text>
                    </View>

                </View>
                <View style={css.dinheiro}>
                    <Text>R$ 1723,10</Text>
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
        justifyContent: 'space-around',
        paddingLeft: 20
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})