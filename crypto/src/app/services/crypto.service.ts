import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BitcoinMarket } from '../models/bitcoin.marketClass';

@Injectable()
export class CryptoService {
    constructor(public http: HttpClient){
    }

    public getBitcoinMarketCap(){
        return this.http.get('https://api.coinmarketcap.com/v2/global/');
    }


    public getAllCryptos(){
        return this.http.get('https://api.coinmarketcap.com/v2/ticker/?structure=array');
    }

}
