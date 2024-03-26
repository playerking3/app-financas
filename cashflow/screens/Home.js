import {View, StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Hub from "../components/Hub";
import Metas from "../components/Metas";
import CardHome from "../components/CardHome";
import Navigator from "../components/Navigator";
import {css} from '../Style/StyleHome'
import {useContext} from "react";
import {Dados} from "../context/Dados";

export default function ({navigation}){
    // const {financeiro, cadastroFinanceiro} = useContext(Dados)
    const {branco,setBranco} = useContext(Dados)
    const {cinza, setCinza} = useContext(Dados)
    const css = StyleSheet.create({
        container: {
            width: '100%',
            height:'100%',
            alignItems: 'center',
            backgroundColor:branco
        }
    })
    return(
        <SafeAreaView style={css.container}>
            <Hub navigation={navigation}></Hub>
            <Metas></Metas>
            <CardHome></CardHome>
            <Navigator navigation={navigation}></Navigator>
        </SafeAreaView>
    )
}