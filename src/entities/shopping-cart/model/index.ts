import Cookies from "js-cookie";
import { makeAutoObservable } from "mobx";

export class ShoppingCartStore {
    public products: number[] = [];
    public cookieName:string = "cart";

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

export const shoppingCartStore = new ShoppingCartStore();