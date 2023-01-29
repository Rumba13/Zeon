import IconText from "../textWithIcon/textWithIcon";
import "./contacts.css"
import verifiedWithVisa from "../../verifiedByVisa.png"
import visa from "../../visa.png"
import payLogo from "../../payLogo.png"
import masterCardIdCheck from "../../masterCardIdCheck.png"
import masterCart from "../../masterCart.svg"
import alphaBankLogo from "../../alphaBankLogo.svg"


export default function Contacts() {
    return <div className="contacts-wrapper list-wrapper">
        <h2 className="title">Контактная информация</h2>
        <div className="contacts">
            <IconText icon="" link={`tel:375 (44) 7-300-500`} text="+375 (44) 7-300-500" />
            <IconText icon="" link={`mailto:corp@zeon.by`} text="corp@zeon.by" />
            <IconText icon="" text="Беларусь, Гомель, ул. Советская 39, оф.14" />
        </div>
        <div className="pay-logos">
            <img className="pay-logos__master-card-id-check" alt="" src={masterCardIdCheck} />
            <img className="pay-logos__master-cart" alt="" src={masterCart} />
            <img className="pay-logos__verified-with-visa" alt="" src={verifiedWithVisa} />
            <img className="pay-logos__visa" alt="" src={visa} />
            <img className="pay-logos__alpha-bank-logo" alt="" src={alphaBankLogo} />
            <img className="pay-logos__pay-logo" alt="" src={payLogo} />
        </div>
    </div>
}