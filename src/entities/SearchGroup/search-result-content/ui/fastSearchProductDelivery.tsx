import { formatDate } from "../../../SearchPageGroup/deliveryDate/ui/formatDate"

type PropsType = {
    deliveryDate: Date
}

export function FastSearchProductDelivery({ deliveryDate }: PropsType) {

    return <span className="search-result-product__delivery">
        {true
            ? <span className="delivery__title _icon-active">В наличии</span>
            : <span className="delivery__title _icon-inactive">Доставка {formatDate(deliveryDate)}</span>
        }
    </span>
}