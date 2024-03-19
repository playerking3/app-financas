import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBell, faEye} from "@fortawesome/free-solid-svg-icons";
import {css} from '../Style/StyleHub'
import {Dados} from "../context/Dados";
import {useContext} from "react";
export default function (){
    const {corHub, setCorHub} = useContext(Dados)

     const hub = StyleSheet.create({
        hub: {
            height: '30%',
            width: '100%',
            backgroundColor: corHub,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30
        }
    })
    return(
            <View style={hub.hub}>
                <View style={css.user}>
                    <View style={css.nomeFoto}>
                        <Image style={css.perfil} source={require('../assets/tigrinho.jpg')} />
                        <Text style={css.textohub}>Luiz Tigrinho</Text>
                    </View>
                    <FontAwesomeIcon size={25}  color={'white'} icon={faBell} />
                </View>
                <View style={css.dinheiro}>
                    <Text style={css.valor}>R$ 1723,10</Text>
                    <FontAwesomeIcon color={'white'} size={35}  icon={faEye} />
                </View>
                <View style={css.divBtn}>
                    <Pressable style={css.btnHub}>
                        <Text style={css.textohub}>Guardar Dinheiro</Text>
                    </Pressable>
                </View>
            </View>
    )
}
