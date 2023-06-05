import "./styles.scss"
import { ICONS } from "../../../../../../images/images"

export function PaymentMethods() {
    return <div className="payment-methods">
        <img className="payment-method__master-card-id-check" src={ICONS.masterCardIdCheck} alt="" />
        <img className="payment-method__master-cart" src={ICONS.masterCard} alt="" />
        <img className="payment-method__verified-with-visa" src={ICONS.visaVerified} alt="" />
        <img className="payment-method__visa" src={ICONS.visa} alt="" />
        <img className="payment-method__alpha-bank-logo" src={ICONS.alphaBank} alt="" />
        <img className="payment-method__pay-logo" src={ICONS.pay} alt="" />
    </div>
}