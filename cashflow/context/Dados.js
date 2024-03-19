import {createContext, useState} from "react";
import {Alert} from "react-native";

const Dados = createContext();

function DadosProvider({ children }) {
    const [financeiro, setFinanceiro] = useState([])

    function cadastroFinanceiro(dados = {}) {
        if(dados?.valor === "" || dados?.nome === "" || dados?.data === "" || dados?.categoria === "") {
            return Alert.alert("Dados não informados")
        }

        setFinanceiro([...financeiro, dados])
    }


    return (
        <Dados.Provider value={{financeiro, cadastroFinanceiro}}>
            {children}
        </Dados.Provider>
    )
}

export {Dados, DadosProvider}