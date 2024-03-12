import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {faGear, faList, faWallet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

function Navigator(){
    return(
        <View style={css.container}>
            <View style={css.nav}>
                <Pressable style={css.menu1}>
                    <FontAwesomeIcon color={'white'} size={35} icon={faWallet} />
                </Pressable>
                <Pressable style={css.menu2}>
                    <FontAwesomeIcon color={'white'} size={35} icon={faList} />
                </Pressable>
                <Pressable style={css.menu3}>
                    <FontAwesomeIcon color={'white'} size={35} icon={faGear} />
                </Pressable>
            </View>
        </View>
    )
}

export default Navigator