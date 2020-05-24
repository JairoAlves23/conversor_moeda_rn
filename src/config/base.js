import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://rickandmortyapi.com/api/character/?page=1'
    //baseURL: 'https://api.hgbrasil.com/finance/quotations?format=json&key='
    baseURL: 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL'
    //baseURL: 'https://api.binance.com/api/v3/ticker/price'
});

export default instance;