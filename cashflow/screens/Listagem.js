import {SafeAreaView, StyleSheet} from "react-native";

import Hub from "../components/Hub";
import ListaSelector from "../components/ListaSelector";
import ListagemTabela from "../components/ListagemTabela";
import Navigator from "../components/Navigator";

export default function ({navigation}){
    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <ListaSelector></ListaSelector>
            <ListagemTabela></ListagemTabela>
            <Navigator navigation={navigation}></Navigator>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
    }
})
