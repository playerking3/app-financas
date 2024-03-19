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


    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <Metas></Metas>
            <CardHome></CardHome>
            <Navigator navigation={navigation}></Navigator>
        </SafeAreaView>
    )
}