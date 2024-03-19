import {createContext, useEffect, useState} from "react";
import {Alert} from "react-native";

const Dados = createContext();

function DadosProvider({ children }) {
    const [financeiro, setFinanceiro] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let aux = 0
        financeiro.map((item)=>{
            aux += item.valor
        })
        setTotal(aux)
    }, [financeiro]);

    function cadastroFinanceiro(dados = {}) {
        if(dados?.valor === "" || dados?.nome === "" || dados?.data === "" || dados?.categoria === "") {
            return Alert.alert("Dados não informados")
        }

        setFinanceiro([...financeiro, dados])
        console.log([...financeiro])
    }
    const [corHub, setCorHub] = useState('#FFD60A')
    const [branco, setBranco] = useState('#FFFFFF')
    const [cinza, setCinza] = useState('#F4F4F4')
    const [texto, setTexto] = useState('#000')




    return (
        <Dados.Provider value={{financeiro, cadastroFinanceiro,texto,setTexto, corHub, setCorHub, branco, setBranco, cinza, setCinza}}>
            {children}
        </Dados.Provider>
    )
}

export {Dados, DadosProvider}