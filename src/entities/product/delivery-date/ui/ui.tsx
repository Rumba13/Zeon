import "./styles.scss";
import { formatDate } from "./formatDate";

type PropsType = {
    date: Date
}

export function DeliveryDate({ date }: PropsType) {
    return <div className="product-information__delivery-date">Доставка {formatDate(date)}</div>
}