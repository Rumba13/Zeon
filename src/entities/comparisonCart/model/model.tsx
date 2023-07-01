import { makeAutoObservable } from "mobx";

export class ComparisonCartStore {
    public products: number[] = [];

    public get productsCount():number {
        return this.products.length;
    }

    constructor() {
        makeAutoObservable(this);
        this.loadCart();
    }

    private loadCart() {

    }

    public addProduct = (productId: number) => {
        this.products.push(productId);
    }
    public removeProduct = (productId: number) => {
        const productIndex = this.products.indexOf(productId);
        this.products.splice(productIndex, 1);
    }
}

export {ComparisonCartStore as ComparisonCartStoreType};
export const comparisonCartStore = new ComparisonCartStore();