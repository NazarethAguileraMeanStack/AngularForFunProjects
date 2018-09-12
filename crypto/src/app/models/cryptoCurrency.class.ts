import { NumberSymbol } from "@angular/common";



export class CryptoCurrency {
    public id: number;
    public name: string;
    public symbol: string;
    public website_slug: string;
    public rank: number;
    public circulating_supply: number;
    public total_supply: number;
    public max_supply: number;
    public price: number;
    public volume_24h: number;
    public market_cap: number;
    public percent_change_1h: number;
    public percent_change_24h: number;
    public percent_change_7d: number;
    public last_updated: Date;
    

    constructor(data?: any){

        this.id = data.id;
        this.name = data.name;
        this.symbol = data.symbol;
        this.website_slug = data.website_slug;
        this.rank = data.rank;
        this.circulating_supply = data.circulating_supply;
        this.total_supply = data.total_supply;
        this.max_supply = data.max_supply;
        this.price = data.quotes.USD.price;
        this.volume_24h = data.quotes.USD.volume_24h;
        this.market_cap = data.quotes.USD.market_cap;
        this.percent_change_1h = data.quotes.USD.percent_change_1h;
        this.percent_change_24h = data.quotes.USD.percent_change_24h;
        this.percent_change_7d = data.quotes.USD.percent_change_7d;
        this.last_updated = data.last_updated;

    }
}