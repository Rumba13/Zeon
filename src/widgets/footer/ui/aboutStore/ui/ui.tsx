import "./styles.scss";
import { LinkList, LinkListItem } from "../../../../../shared/ui/linkList";

export function AboutStore() {
    return <LinkList className="about-store" title="Интернет-магазин" >
        <LinkListItem href="##" >Телевизоры</LinkListItem>
        <LinkListItem href="##" >Ноутбуки</LinkListItem>
        <LinkListItem href="##" >Мобильные телефоны</LinkListItem>
        <LinkListItem href="##" >Пылесосы</LinkListItem>
        <LinkListItem href="##" >Холодильники</LinkListItem>
        <LinkListItem href="##" >Сковороды</LinkListItem>
        <LinkListItem href="##" >Детские коляски</LinkListItem>
        <LinkListItem href="##" >Стиральные машины</LinkListItem>
        <LinkListItem href="##" >Фильтры для воды</LinkListItem>
        <LinkListItem href="##" >Уценка</LinkListItem>
        <LinkListItem href="##" >Карта сайта</LinkListItem>
    </LinkList>
}