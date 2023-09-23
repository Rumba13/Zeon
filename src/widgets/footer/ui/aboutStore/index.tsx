import "./styles.scss";
import {AboutStoreListItem} from "./AboutStoreListItem";
//TODO remove linklist

export function AboutStore() {
    return <div className="about-store">
        <h2 className="about-store__title">Интернет-магазин</h2>

        <ul className="about-store-list">
            <AboutStoreListItem href="##">Телевизоры</AboutStoreListItem>
            <AboutStoreListItem href="##" >Ноутбуки</AboutStoreListItem>
            <AboutStoreListItem href="##" >Мобильные телефоны</AboutStoreListItem>
            <AboutStoreListItem href="##" >Пылесосы</AboutStoreListItem>
            <AboutStoreListItem href="##" >Холодильники</AboutStoreListItem>
            <AboutStoreListItem href="##" >Сковороды</AboutStoreListItem>
            <AboutStoreListItem href="##" >Детские коляски</AboutStoreListItem>
            <AboutStoreListItem href="##" >Стиральные машины</AboutStoreListItem>
            <AboutStoreListItem href="##" >Фильтры для воды</AboutStoreListItem>
            <AboutStoreListItem href="##" >Уценка</AboutStoreListItem>
            <AboutStoreListItem href="##" >Карта сайта</AboutStoreListItem>
        </ul>
    </div>
}