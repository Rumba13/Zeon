export function formatPrice(price: number) {
    return Number(price).toFixed(2).replace(".", ",")
}
