import "./contacts.scss"
import verifiedWithVisa from "../../images/verifiedByVisa.png"
import visa from "../../images/visa.png"
import payLogo from "../../images/payLogo.png"
import masterCardIdCheck from "../../images/masterCardIdCheck.png"
import masterCart from "../../images/masterCart.svg"
import alphaBankLogo from "../../images/alphaBankLogo.svg"
import PhoneNumber, { convertPhoneNumber } from "../phoneNumber/phoneNumber";
import ContactsField from "../contactsField/contactsField"


export default function Contacts() {
    return <div className="contacts-wrapper list-wrapper">
        <h2 className="title">Контактная информация</h2>
        <div className="contacts">
            <ContactsField spriteYOffset={-224} text={convertPhoneNumber("375447300500")} link="tel:375447300500"/>
            <ContactsField spriteYOffset={-204} text="corp@zeon.by" link="mailto:corp@zeon.by"/>
            <ContactsField spriteYOffset={-693} text="Беларусь, Гомель, ул. Советская 39, оф.14" />
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