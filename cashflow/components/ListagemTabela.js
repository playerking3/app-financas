import {Pressable, StyleSheet, Text, View} from "react-native";
import Hr from "./Hr";
import {css} from '../Style/StyleListagemTabela'
import {Dados} from "../context/Dados";
import {useContext, useState} from "react";
import TabelaLinha from "./TabelaLinha";

export default function ({navigation}){
    const {financeiro, total,texto, setTexto, cinza, setCinza} = useContext(Dados)


    const text = StyleSheet.create({
        texto:{
            fontSize: 16,
            color: texto
        },
        container: {
            backgroundColor: cinza,
            margin: 12,
            borderRadius: 12,
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
        }
    })
    console.log(total)
    return(
        <View style={text.container}>
            <View>
                <TabelaLinha data={'Data'} nome={'Nome'} valor={'Valor'}/>
                <Hr/>
                <View style={css.linhaBtn}>
                    <Pressable style={css.btn} onPress={() => navigation.navigate("Cadastro")}><Text style={css.btnTexto}>Adicionar</Text></Pressable>
                </View>
                <Hr/>
                {financeiro.length > 0 && financeiro.map((obj)=>(
                    obj.categoria === "receitas" && filtro !== 'despesa' ? (
                        <TabelaLinha data={obj.data} nome={obj.nome} valor={obj.valor} cor={'#1a913a'}/>
                    ) : filtro !== 'receita' ? (
                            <TabelaLinha data={obj.data} nome={obj.nome} valor={obj.valor} cor={'#b31b00'}/>
                        ) : ({})
                ))}
            </View>

            <View style={css.linhaBtn}>
                <Text style={text.texto}>Total: R${(total.totalReceitas - total.totalDespesa)}</Text>
            </View>
        </View>
    )
}

