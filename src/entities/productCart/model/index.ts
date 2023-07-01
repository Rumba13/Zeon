import { makeAutoObservable } from "mobx";

export class ShoppingCartStore {
    public products: number[] = [];

    public get productsCount() {
        return this.products.length;
    }

    constructor() { 
        makeAutoObservable(this);
    }

    public addProduct = (id: number) => {
        this.products.push(id);
    }
    public removeProduct = (id: number) => {
        const productIndex = this.products.indexOf(id);
        this.products.splice(productIndex, 1);
    }
}

export const shoppingCartStore = new ShoppingCartStore();