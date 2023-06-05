import "./styles.scss";
import LinkListItem from "../../../../../shared/ui/legacy_linkList/linkListItem/linkListItem";

export function AboutStore() { 
    return <div className="about-store list-wrapper">
        <h2 className="about-store__title title">Интернет-магазин</h2>
        
        <ul className="about-store-list list">
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
        </ul>
    </div>
}