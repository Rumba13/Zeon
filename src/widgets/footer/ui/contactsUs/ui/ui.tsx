import "./styles.scss"
import { formatPhone } from "../../../../../entities/phoneNumbers"
import { LinkList, LinkListItem } from "../../../../../shared/ui/linkList"
import { Sprite } from "../../../../../shared/ui/sprite"
import { PaymentMethods } from "../paymentMethods"

export function ContactsUs() {
    return <div className="contacts-us-container">
        <LinkList className="contacts-us" title="Контактная информация">
            <LinkListItem className="contacts-field" href="tel:375447300500">
                <Sprite yOffset={-224} />
                {formatPhone("375447300500")}
            </LinkListItem>
            <LinkListItem className="contacts-field" href="mailto:corp@zeon.by">
                <Sprite yOffset={-204} />
                corp@zeon.by
            </LinkListItem>
            <LinkListItem className="contacts-field" href="##">
                <Sprite yOffset={-693} />
                Беларусь, Гомель, ул. Советская 39, оф.14
            </LinkListItem>
        </LinkList>
        <PaymentMethods />
    </div>

}