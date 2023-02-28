import "./contacts.scss"
import PhoneNumber, { convertPhoneNumber } from "../phoneNumber/phoneNumber";
import ContactsField from "../contactsField/contactsField"
import { ICONS } from "../../images/images"


export default function Contacts() {
    return <div className="contacts-wrapper list-wrapper">
        <h2 className="title">Контактная информация</h2>
        <div className="contacts">
            <ContactsField spriteYOffset={-224} text={convertPhoneNumber("375447300500")} link="tel:375447300500" />
            <ContactsField spriteYOffset={-204} text="corp@zeon.by" link="mailto:corp@zeon.by" />
            <ContactsField spriteYOffset={-693} text="Беларусь, Гомель, ул. Советская 39, оф.14" />
        </div>
        <div className="pay-logos">
            <img className="pay-logos__master-card-id-check" src={ICONS.masterCardIdCheck} />
            <img className="pay-logos__master-cart" src={ICONS.masterCard} />
            <img className="pay-logos__verified-with-visa" src={ICONS.visaVerified} />
            <img className="pay-logos__visa" src={ICONS.visa} />
            <img className="pay-logos__alpha-bank-logo" src={ICONS.alphaBank} />
            <img className="pay-logos__pay-logo" src={ICONS.pay} />
        </div>
    </div>
}