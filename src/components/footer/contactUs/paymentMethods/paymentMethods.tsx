import "./paymentMethods.scss"
import { ICONS } from "../../../../images/images"

export default function PaymentMethods() {
    return <div className="payment-methods">
        <img className="payment-method__master-card-id-check" src={ICONS.masterCardIdCheck} />
        <img className="payment-method__master-cart" src={ICONS.masterCard} />
        <img className="payment-method__verified-with-visa" src={ICONS.visaVerified} />
        <img className="payment-method__visa" src={ICONS.visa} />
        <img className="payment-method__alpha-bank-logo" src={ICONS.alphaBank} />
        <img className="payment-method__pay-logo" src={ICONS.pay} />
    </div>
}