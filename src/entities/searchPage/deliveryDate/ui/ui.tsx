import { formatDate } from "./formatDate";
import "./styles.scss";

type PropsType = {
    date: Date
}

export function DeliveryDate({ date }: PropsType) {
    return <div className="product-information__delivery-date">Доставка {formatDate(date)}</div>
}