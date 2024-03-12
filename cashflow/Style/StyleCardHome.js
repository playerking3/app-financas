import {StyleSheet} from "react-native";

export const css = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '25%',
        width: '100%',
    },
    containerCards: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '90%',
        width: '100%'
    },
    textoCards: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    textadd:{
        color: '#ffdc03'
    }
})