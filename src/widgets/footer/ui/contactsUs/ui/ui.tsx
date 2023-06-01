import "./styles.scss"
import ContactsField from "../contactField/contactField"
import PaymentMethods from "../paymentMethods/paymentMethods"
import { formatPhone } from "../../../../../entities/phoneNumbers"

export function ContactsUs() {
    return <div className="contacts-us-wrapper list-wrapper">
        <h2 className="contacts-us__title title">Контактная информация</h2>
        <div className="contacts-us">
            <ContactsField spriteYOffset={-224} text={formatPhone("375447300500")} link="tel:375447300500" />
            <ContactsField spriteYOffset={-204} text="corp@zeon.by" link="mailto:corp@zeon.by" />
            <ContactsField spriteYOffset={-693} text="Беларусь, Гомель, ул. Советская 39, оф.14" />
        </div>
        <PaymentMethods />
    </div>
}