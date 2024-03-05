import {View, StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function (){
    return(
        <SafeAreaView>
            <View style={css.hub}>

            </View>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    hub: {
        height:'30%',
        width:'100%',
        backgroundColor: '#FFD60A'

    }
})