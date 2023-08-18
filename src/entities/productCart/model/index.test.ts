import { ShoppingCartStore } from ".";

test("shopping cart add product", () => {
    const shoppingCartStore = new ShoppingCartStore();

    shoppingCartStore.addProduct(1);

    expect(shoppingCartStore.products[0]).toBe(1);

    shoppingCartStore.addProduct(34);
    shoppingCartStore.addProduct(22);

    expect(shoppingCartStore.products[2]).toBe(22);
})

test("shopping cart remove product", () => {
    const shoppingCartStore = new ShoppingCartStore();

    shoppingCartStore.addProduct(1);
    shoppingCartStore.addProduct(2);
    shoppingCartStore.addProduct(3);
    shoppingCartStore.addProduct(4);

    shoppingCartStore.removeProduct(1);

    expect(shoppingCartStore.products[0]).not.toBe(1);
})