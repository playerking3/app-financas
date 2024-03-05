import {View, StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Hub from "../components/Hub";

export default function (){
    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
    }
})