type PropsType = {
    price: number,
    className?:string
}

export function ProductPrice({ price,className }: PropsType) {

    function formatPrice(price: number) { //TODO separate
        return Number(price).toFixed(2).replace(".", ",")
    }

    return <span className={className ?? ""}>
        {`${formatPrice(price)} руб`}
    </span>
}