import {SafeAreaView, StyleSheet} from "react-native";

import Hub from "../components/Hub";
import ListaSelector from "../components/ListaSelector";
import ListagemTabela from "../components/ListagemTabela";
import Navigator from "../components/Navigator";
import {Dados} from "../context/Dados";
import {useContext} from "react";
export default function ({navigation}){
    const {branco,setBranco} = useContext(Dados)
    const cont = StyleSheet.create({
        container: {
            backgroundColor: branco,
            borderRadius: 12,
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
    }})
    return(
        <SafeAreaView style={cont.container}>
            <Hub navigation={navigation}></Hub>
            <ListaSelector></ListaSelector>
            <ListagemTabela navigation={navigation}></ListagemTabela>
            <Navigator navigation={navigation}></Navigator>
        </SafeAreaView>
    )}
const css = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',}})