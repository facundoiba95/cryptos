
const urlBase = `https://api.coinlore.net/api/tickers/`;
const apiKey = `EA2F4AA2-EE7D-4D2D-89CA-D7B92B476E1F`


const requestApi = async (valor) => {
    try {
        const queryParams = `?start=0&limit=100`
        const conectar = await fetch(urlBase+queryParams)
        const json = await conectar.json()
        
        const data = json.data;
       
        const resultado = valor 
        ? dividirArray(data.filter(coin => coin.name.toLowerCase() === valor.toLowerCase()),10)
        : dividirArray(data, 10)
    
        console.log(resultado)
        return {
            resultado: resultado,
            total: resultado.length,
            atras: null,
            next: 1,
            actual:0,
        }
    } catch (error) {
        console.log(error)
    }
}

function dividirArray(array, size){
    let corte = [];

    for (let i = 0; i < array.length; i+= size) {
        corte.push(array.slice(i,i + size))
    }
    
    return corte;
}
