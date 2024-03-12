import {View, StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Hub from "../components/Hub";
import Navigator from "../components/Navigator";
import {css} from '../Style/StyleHome'

export default function ({navigation}){
    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <View>

            </View>
            <Navigator navigation={navigation}></Navigator>
        </SafeAreaView>
    )
}