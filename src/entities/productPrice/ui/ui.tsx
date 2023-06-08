import { formatPrice } from "./formatPrice"

type PropsType = {
    price: number,
    className?: string
}

export function ProductPrice({ price, className }: PropsType) {
    return <span className={className ?? ""}>
        {formatPrice(price) + " руб"}
    </span>
}