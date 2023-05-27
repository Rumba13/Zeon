import "./deliveryDate.scss";

type PropsType = {
    date?: Date
}

export default function DeliveryDate({ date }: PropsType) {
    function formatDate(date?: Date) {
        return `${date?.getDay()}.${date?.getMonth()}.${date?.getFullYear()}`
    }

    return <div className="product-information__delivery-date">Доставка {formatDate(date)}</div>
}