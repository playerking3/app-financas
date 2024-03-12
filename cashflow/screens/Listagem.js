import {SafeAreaView, StyleSheet} from "react-native";

import Hub from "../components/Hub";
import ListaSelector from "../components/ListaSelector";
import ListagemTabela from "../components/ListagemTabela";

export default function (){
    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <ListaSelector></ListaSelector>
            <ListagemTabela></ListagemTabela>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
    }
})
