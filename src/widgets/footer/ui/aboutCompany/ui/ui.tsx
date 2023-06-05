import "./styles.scss"
import LinkListItem from "../../../../../shared/ui/legacy_linkList/linkListItem/linkListItem"

export function AboutCompany() {
    return <div className="about-company list-wrapper">
        <h2 className="about-company__title title">Компания</h2>

        <ul className="about-company-list list">
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
        </ul>
    </div>
}