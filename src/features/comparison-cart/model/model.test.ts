import { ComparisonCartStore } from "./model"

test("add product-details-card to comparison", () => {
    const comparisonCartStore = new ComparisonCartStore();

    comparisonCartStore.addProduct(1);

    expect(comparisonCartStore.products[0]).toBe(1);
})


test("remove product-details-card from comparison", () => {
    const comparisonCartStore = new ComparisonCartStore();

    comparisonCartStore.products = [3, 1, 4, 3434, 4, 66, 777];

    comparisonCartStore.removeProduct(1);

    expect(comparisonCartStore.products.includes(1)).toBe(false);
})

test("get recommended-products count", () => {
    const comparisonCartStore = new ComparisonCartStore();

    comparisonCartStore.products = [1,2,3];

    expect(comparisonCartStore.productsCount).toBe(3);
})