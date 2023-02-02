import CatalogItem from "../catalogItem/catalogItem";
import "./catalog.css";

export default function Catalog() {
    return <ul className="catalog">
        <CatalogItem text="Компьютеры и сети">
            <CatalogItem text="Компьютеры и комплектующие"></CatalogItem>
            <CatalogItem text="Ноутбуки и аксессуары"></CatalogItem>
            <CatalogItem text="Периферия"></CatalogItem>
            <CatalogItem text="Сетевое оборудование"></CatalogItem>
            <CatalogItem text="Техника для печати и дизайна"></CatalogItem>
            <CatalogItem text="Игры и программное обеспечение"></CatalogItem>
        </CatalogItem>

        <CatalogItem text="Электроника">

        </CatalogItem>

        <CatalogItem text="Бытовая техника">

        </CatalogItem>

        <CatalogItem text="Работа и офис">

        </CatalogItem>

        <CatalogItem text="Стройка и ремонт">

        </CatalogItem>

        <CatalogItem text="Авто и Мото">

        </CatalogItem>

        <CatalogItem text="Дом и сад">

        </CatalogItem>

        <CatalogItem text="Красота и спорт">

        </CatalogItem>

        <CatalogItem text="Детям и мамам">

        </CatalogItem>

        <CatalogItem text="Уценка">
            <CatalogItem text="Распродажа">
                <CatalogItem text="БУ под заказ"></CatalogItem>
                <CatalogItem text="Уценённый товар"></CatalogItem>
            </CatalogItem>
        </CatalogItem>
    </ul>
}