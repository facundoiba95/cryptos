const cards = document.querySelector('.cards')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const btnBuscar = document.querySelector('.btnBuscar')
const cargando = document.querySelector('.cargando')

const createHTMLCrypto = array => {
    const {name, symbol, price_btc, price_usd} = array;
    return `
    <li class="card">
    <h2>${name}</h2>
    <h3>${symbol}</h3>
    <p>Price BTC: ${price_btc}</p>
    <p>Price USD: ${price_usd}</p>
    </li>
`
}

const renderCreateHTMLCrypto = (array, actual)=> {
cards.innerHTML += array[actual].map(createHTMLCrypto).join('')
}

const resetCount = coins => {
    resultado= coins.resultado;
    next = coins.next;
    atras= coins.atras;
    total= coins.total;
    actual = coins.actual;
}

const loadCoin = async e => {
    e.preventDefault();
    const inputValue = input.value.trim()
    const fetchAPI = await requestApi(inputValue);

    resetCount(fetchAPI)
    renderCreateHTMLCrypto(resultado,actual)
}

const cargandoCoin = () => {
setTimeout(function (){
    cargando.style.display="block"
    renderCreateHTMLCrypto(resultado,actual);
},2000)

}

const init = () => {    
    window.addEventListener('DOMContentLoaded', loadCoin)
    cargando.style.display= "none"
    window.addEventListener('scroll', () => {
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement;

        const bottom = scrollTop + clientHeight >= scrollHeight -1;
    
        if(bottom){
            actual= actual + 1;
            console.log(bottom)
            cargandoCoin()
        } 
    })
}
init()