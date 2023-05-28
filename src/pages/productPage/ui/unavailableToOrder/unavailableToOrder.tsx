import "./unavailableToOrder.scss";

type PropsType = {
    message: string
}

export default function UnavailableToOrder({ message }: PropsType) {
    return <div className="unavailable-to-order">
        <h3 className="unavailable-to-order__title">Недоступно к заказу</h3>
        <span className="unavailable-to-order__message">{message}</span>
    </div>
}