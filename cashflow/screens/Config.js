import {View, StyleSheet, Text, Pressable} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Hub from "../components/Hub";
import Navigator from "../components/Navigator";
import {css} from '../Style/StyleConfig'

export default function ({navigation}){
    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <View style={css.divgrande}>
                <Pressable style={css.btnDark}>
                    <Text style={css.btnText}>
                        Modo Escuro
                    </Text>
                </Pressable>
            </View>
            <Navigator navigation={navigation}></Navigator>
        </SafeAreaView>
    )
}