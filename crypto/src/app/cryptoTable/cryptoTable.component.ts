import { Component } from "@angular/core";
import { CryptoService } from "../services/crypto.service";
import { CryptoCurrency } from "../models/cryptoCurrency.class";


@Component({
    selector: "crypto-table",
    templateUrl: "./cryptoTable.component.html",
    styleUrls: ["./cryptoTable.component.css"]
})

export class CryptoTable {

    public top100Cryptos = [];
    public switchValues = {alphabetically: true, byRank: true, byMarketCap: true, byPrice: true, byVolume: true, byPercentChange: true};

    constructor(public cryptoService: CryptoService){
        this.getTop100Cryptos();
    }

    public getTop100Cryptos() {
        this.cryptoService.getAllCryptos().subscribe((data: any) => {
            this.top100Cryptos = data.data;
        });
    }

    public sortByName() {
        if (this.switchValues.alphabetically == true){
            this.top100Cryptos.sort(this.compare);
        } else {
            this.top100Cryptos.sort(this.reverseCompare);
        }
        this.switchValues.alphabetically = !this.switchValues.alphabetically;
    }

    public sortByRank(){
        if (this.switchValues.byRank == true){
            this.top100Cryptos.sort(this.compareRank);
        } else {
            this.top100Cryptos.sort(this.reverseCompareRank);
        }
        this.switchValues.byRank = !this.switchValues.byRank;
    }

    public sortByMarketCap(){
        if (this.switchValues.byMarketCap == true){
            this.top100Cryptos.sort(this.compareMarketCap);
        } else {
            this.top100Cryptos.sort(this.reverseCompareMarketCap);
        }
        this.switchValues.byMarketCap = !this.switchValues.byMarketCap;
    }

    public sortByPrice(){
        if (this.switchValues.byPrice == true){
            this.top100Cryptos.sort(this.comparePrice);
        } else {
            this.top100Cryptos.sort(this.reverseComparePrice);
        }
        this.switchValues.byPrice = !this.switchValues.byPrice;
    }

    public sortByVolume(){
        if (this.switchValues.byVolume == true){
            this.top100Cryptos.sort(this.compareVolume);
        } else {
            this.top100Cryptos.sort(this.reverseCompareVolume);
        }
        this.switchValues.byVolume = !this.switchValues.byVolume;
    }

    public sortByPercentChange(){
        if (this.switchValues.byPercentChange == true){
            this.top100Cryptos.sort(this.comparePercentChange);
        } else {
            this.top100Cryptos.sort(this.reverseComparePercentChange);
        }
        this.switchValues.byPercentChange = !this.switchValues.byPercentChange;
    }





    // ####### Compare functions passed to sort methods
    
    // ---------- Compare By Names -----------------
    public compare(a,b) {
        if (a.name.toUpperCase() < b.name.toUpperCase())
          return -1;
        if (a.name.toUpperCase() > b.name.toUpperCase())
          return 1;
        return 0;
      }

    public reverseCompare(a,b){
        if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
        if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
        return 0;
    }

    // ----------- Compare By Ranks -----------------
    public compareRank(a,b){
        if (a.rank < b.rank) return -1;
        if (a.rank > b.rank) return 1;
        return 0;
    }
    
    public reverseCompareRank(a,b){
        if (a.rank > b.rank) return -1;
        if (a.rank < b.rank) return 1;
        return 0;
    }

    // -------- Compare By Market Cap ---------------
    public compareMarketCap(a,b){
        if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) return -1;
        if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) return 1;
        return 0;
    }
    
    public reverseCompareMarketCap(a,b){
        if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) return -1;
        if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) return 1;
        return 0;
    }

    // -------- Compare By Price ---------------
    public comparePrice(a,b){
        if (a.quotes.USD.price < b.quotes.USD.price) return -1;
        if (a.quotes.USD.price > b.quotes.USD.price) return 1;
        return 0;
    }
    
    public reverseComparePrice(a,b){
        if (a.quotes.USD.price > b.quotes.USD.price) return -1;
        if (a.quotes.USD.price < b.quotes.USD.price) return 1;
        return 0;
    }

    // -------- Compare By Volume ---------------
    public compareVolume(a,b){
        if (a.circulating_supply < b.circulating_supply) return -1;
        if (a.circulating_supply > b.circulating_supply) return 1;
        return 0;
    }
    
    public reverseCompareVolume(a,b){
        if (a.circulating_supply > b.circulating_supply) return -1;
        if (a.circulating_supply < b.circulating_supply) return 1;
        return 0;
    }


    // -------- Compare By Percent Change ---------------
    public comparePercentChange(a,b){
        if (a.quotes.USD.percent_change_24h < b.quotes.USD.percent_change_24h) return -1;
        if (a.quotes.USD.percent_change_24h > b.quotes.USD.percent_change_24h) return 1;
        return 0;
    }
    
    public reverseComparePercentChange(a,b){
        if (a.quotes.USD.percent_change_24h > b.quotes.USD.percent_change_24h) return -1;
        if (a.quotes.USD.percent_change_24h < b.quotes.USD.percent_change_24h) return 1;
        return 0;
    }


}