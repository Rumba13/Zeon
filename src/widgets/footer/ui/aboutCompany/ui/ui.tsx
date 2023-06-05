import "./styles.scss"
import { LinkList, LinkListItem } from "../../../../../shared/ui/linkList"

export function AboutCompany() {
    return <LinkList className="about-company" title="Компания">
        <LinkListItem href="##" >Новости</LinkListItem>
            <LinkListItem href="##" >Рассрочка</LinkListItem>
            <LinkListItem href="##" >Как купить</LinkListItem>
            <LinkListItem href="##" >Доставка</LinkListItem>
            <LinkListItem href="##" >Контакты</LinkListItem>
            <LinkListItem href="##" >Клубная Карта</LinkListItem>
            <LinkListItem href="##" >Договор</LinkListItem>
            <LinkListItem href="##" >Как купить</LinkListItem>
            <LinkListItem href="##" >Гарантия</LinkListItem>
            <LinkListItem href="##" >О нас</LinkListItem>
            <LinkListItem href="##" >Услуги</LinkListItem>
            <LinkListItem href="##" >Страхование</LinkListItem>
            <LinkListItem href="##" >Подарочные сертификаты</LinkListItem>
    </LinkList>
}