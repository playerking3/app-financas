export default (event, setExibe, setData) => {
    setExibe(false);
    const dia = new Date(event.nativeEvent.timestamp).getDate()
    const mes = new Date(event.nativeEvent.timestamp).getMonth() + 1
    const ano = new Date(event.nativeEvent.timestamp).getFullYear()
    setData(dia + "/" + mes + "/" + ano)
}