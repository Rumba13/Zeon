import "./styles.scss"
import alphaBankIcon from "../../../../../../images/alphaBankLogo.svg"
import visaIcon from "../../../../../../images/visa.png"
import payIcon from "../../../../../../images/payLogo.png"
import visaVerifiedIcon from "../../../../../../images/verifiedByVisa.png"
import masterCardIcon from "../../../../../../images/masterCart.svg"
import masterCardIdCheckIcon from "../../../../../../images/masterCardIdCheck.png"
import {PaymentMethodType} from "../api/payment-method-type";
import {PaymentMethod} from "./payment-method";

export function PaymentMethods() {

    const paymentMethods: PaymentMethodType[] = [
        {icon: masterCardIdCheckIcon},
        {icon: masterCardIcon, className: "master-cart"},
        {icon: visaVerifiedIcon},
        {icon: visaIcon},
        {icon: alphaBankIcon, className: "alpha-bank-logo"},
        {icon: payIcon, className: "pay-logo"},
    ];

    return <div className="payment-methods">
        {paymentMethods.map(payment => <PaymentMethod icon={payment.icon} className={payment.className}/>)}
    </div>
}