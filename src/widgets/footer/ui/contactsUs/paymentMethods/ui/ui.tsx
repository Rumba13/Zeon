import "./styles.scss"
import alphaBankIcon from "../../../../../../images/alphaBankLogo.svg"
import visaIcon from "../../../../../../images/visa.png"
import payIcon from "../../../../../../images/payLogo.png"
import visaVerifiedIcon from "../../../../../../images/verifiedByVisa.png"
import masterCardIcon from "../../../../../../images/masterCart.svg"
import masterCardIdCheckIcon from "../../../../../../images/masterCardIdCheck.png"

export function PaymentMethods() {//TODO add items
    return <div className="payment-methods">
        <img className="payment-method__master-card-id-check" src={masterCardIdCheckIcon} alt="" />
        <img className="payment-method__master-cart" src={masterCardIcon} alt="" />
        <img className="payment-method__verified-with-visa" src={visaVerifiedIcon} alt="" />
        <img className="payment-method__visa" src={visaIcon} alt="" />
        <img className="payment-method__alpha-bank-logo" src={alphaBankIcon} alt="" />
        <img className="payment-method__pay-logo" src={payIcon} alt="" />
    </div>
}