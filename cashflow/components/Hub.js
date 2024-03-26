import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBell, faEye, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {css} from '../Style/StyleHub'
import {Dados} from "../context/Dados";
import {useContext, useState} from "react";
export default function ({navigation}){
    const {corHub, setCorHub} = useContext(Dados)
    const {meta, setMeta} = useContext(Dados)
    const {total} = useContext(Dados)
    const [texto, setTexto] = useState(total.totalReceitas - total.totalDespesa)

    function mudatexto(){
        if(texto !== '***'){
            setTexto('***')
        }
        else{
            setTexto(total.totalReceitas - total.totalDespesa)
        }
    }
     const hub = StyleSheet.create({
        hub: {
            height: 200,
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
                    <Pressable onPress={() => navigation.navigate("Start")}>
                        <FontAwesomeIcon color={'white'} size={25} icon={faRightFromBracket} />
                    </Pressable>
                </View>
                <View style={css.dinheiro}>
                    <Text style={css.valor}>R${texto}</Text>
                    <Pressable style={css.btnolho} onPress={() => mudatexto()}>
                        <FontAwesomeIcon color={'white'} size={35}  icon={faEye} />
                    </Pressable>
                </View>
                <View style={css.divBtn}>
                    <Pressable style={css.btnHub}>
                        <Text style={css.textohub}>Meta Financeira</Text>
                    </Pressable>
                </View>
            </View>
    )
}
