import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {faGear, faList, faWallet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

function Navigator(){
    return(
        <View style={css.container}>
            <View style={css.nav}>
                <View style={css.menu1}>
                    <FontAwesomeIcon color={'white'} size={35} icon={faWallet} />
                </View>
                <View style={css.menu2}>
                    <FontAwesomeIcon color={'white'} size={35} icon={faList} />
                </View>
                <View style={css.menu3}>
                    <FontAwesomeIcon color={'white'} size={35} icon={faGear} />
                </View>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        height: '15%',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    nav: {
        height: '55%',
        width: '70%',
        flexDirection:'row',
        borderRadius: 100,
        backgroundColor: '#FFD60A',
    },
    menu3: {
        height: '100%',
        width:'33%',
        justifyContent:'center',
        alignItems: 'center',
    },
    menu2: {
        height: '100%',
        width:'33%',
        justifyContent:'center',
        alignItems: 'center',
    },
    menu1: {
        height: '100%',
        width:'33%',
        justifyContent:'center',
        alignItems: 'center',
        borderBottomLeftRadius:100,
        borderTopLeftRadius:100,
        backgroundColor: '#dcbe02',
    }
})
export default Navigator