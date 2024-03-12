import {View, StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Hub from "../components/Hub";
import Metas from "../components/Metas";
import CardHome from "../components/CardHome";
import Navigator from "../components/Navigator";

export default function (){
    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <Metas></Metas>
            <CardHome></CardHome>
            <Navigator></Navigator>
        </SafeAreaView>
    )
}