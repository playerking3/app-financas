import {createContext, useEffect, useState} from "react";
import {Alert} from "react-native";

const Dados = createContext();

function DadosProvider({ children }) {
    const [financeiro, setFinanceiro] = useState([])

    let totalDespesa = financeiro.reduce((soma, item) => {
        if (item.categoria === "despesas") return soma + parseInt(item.valor)
    }, 0)

    let totalReceitas = financeiro.reduce((soma, item) => {
        if (item.categoria === "receitas") return soma + parseInt(item.valor)
    }, 0)

    let total = {
        totalDespesa : totalDespesa || 0,
        totalReceitas: totalReceitas || 0
    }


    function cadastroFinanceiro(dados = {}) {
        if(dados?.valor === "" || dados?.nome === "" || dados?.data === "" || dados?.categoria === "") {
            return Alert.alert("Dados não informados")
        }

        setFinanceiro([...financeiro, dados])
        console.log([...financeiro])
    }


    return (
        <Dados.Provider value={{financeiro, cadastroFinanceiro, total}}>
            {children}
        </Dados.Provider>
    )
}

export {Dados, DadosProvider}