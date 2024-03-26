import {createContext, useEffect, useState} from "react";
import {Alert} from "react-native";

const Dados = createContext();

function DadosProvider({ children }) {
    const [financeiro, setFinanceiro] = useState([])
    const [filtro, setFiltro] = useState('tudo')
    const [total, setTotal] = useState({
        totalDespesa: 0,
        totalReceitas: 0
    })

    useEffect(() => {
        console.log(financeiro)

        let totalDespesas = 0
        let totalReceitas = 0

        financeiro.map((item) => {
            if (item.categoria === "despesas") {
                totalDespesas += parseFloat(item.valor);
            } else {
                totalReceitas += parseFloat(item.valor);
            }
        })

        console.log("ANTES", totalDespesas, totalReceitas)

        let totalAux = {
            totalDespesa : totalDespesas || 0,
            totalReceitas: totalReceitas || 0
        }

        console.log("DEPOIS", totalAux)

        setTotal(totalAux)

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
    const [meta, setMeta] = useState(2000)




    return (

        <Dados.Provider value={{meta, setMeta, financeiro, cadastroFinanceiro,texto, setTexto, corHub, setCorHub, branco, setBranco, cinza, setCinza, total, filtro, setFiltro}}>
            
            {children}
        </Dados.Provider>
    )
}

export {Dados, DadosProvider}