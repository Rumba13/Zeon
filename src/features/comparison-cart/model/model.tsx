import Cookies from "js-cookie";
import {makeAutoObservable} from "mobx";

export class ComparisonCartStore {
    public products: number[] = [];
    private cookieName: string = "comparison-cart";

    public get productsCount() {
        return this.products.length;
    }

    private writeCartInCookie() {
        Cookies.set(this.cookieName, JSON.stringify(this.products));
    }

    private readCartFromCookie() {
        this.products = JSON.parse(Cookies.get(this.cookieName) || "[]");
    }

    constructor() {
        makeAutoObservable(this);
        this.readCartFromCookie();
    }

    public addProduct = (id: number) => {
        this.products.push(id);
        this.writeCartInCookie();
    }
    public removeProduct = (id: number) => {
        const productIndex = this.products.indexOf(id);
        this.products.splice(productIndex, 1);
        this.writeCartInCookie();
    }
}

export {ComparisonCartStore as ComparisonCartStoreType};
export const comparisonCartState = new ComparisonCartStore();