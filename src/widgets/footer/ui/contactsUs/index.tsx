import "./styles.scss"
import { Sprite } from "../../../../shared/ui/sprite/ui"
import { PaymentMethods } from "./paymentMethods"
import { formatPhone } from "../../../../entities/phones"
import {ContactUsListItem} from "./contact-us-list-item";

export function ContactsUs() {
    return <div className="contacts-us-container">

        <div className="contacts-us">
            <h2 className="contacts-us__title">Контактная информация</h2>
            <ul className="contacts-us-list">
                <ContactUsListItem href="tel:375447300500">
                    <Sprite yOffset={-224} />
                    {formatPhone("375447300500")}
                </ContactUsListItem>
                <ContactUsListItem href="mailto:corp@zeon.by">
                    <Sprite yOffset={-204} />
                    corp@zeon.by
                </ContactUsListItem>
                <ContactUsListItem>
                    <Sprite yOffset={-693} />
                    Беларусь, Гомель, ул. Советская 39, оф.14
                </ContactUsListItem>
            </ul>
        </div>

        <PaymentMethods />
    </div>

}