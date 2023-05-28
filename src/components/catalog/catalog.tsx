import "./catalog.scss";
import CatalogItem from "./catalogItem/catalogItem";
import Title from "./catalogTitle/catalogTitle";

export default function Catalog(/*{ listItems }: PropsType*/) {
    return <ul className="catalog">
        <CatalogItem>
            <Title>Компьютеры и сети</Title>
            <CatalogItem>
                <Title>Компьютеры и комплектующие</Title>
                <CatalogItem>
                    <Title>SSD</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Блоки питания
                    </Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Видеокарты</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Жесткие диски</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Звуковые карты</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Компьютеры</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Корпуса</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Материнские платы</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Моноблоки</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Оперативная память</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Оптические накопители</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Процессоры</Title>
                </CatalogItem>
                <CatalogItem>
                    <Title>Системы охлаждения</Title>
                </CatalogItem>
            </CatalogItem>
            <CatalogItem>
                <Title>Ноутбуки и аксессуары</Title>
            </CatalogItem>
            <CatalogItem>
                <Title>Периферия</Title>
            </CatalogItem>
            <CatalogItem>
                <Title>Сетевое оборудование</Title>
            </CatalogItem>
            <CatalogItem>
                <Title>Техника для печати и дизайна</Title>
            </CatalogItem>
            <CatalogItem>
                <Title>Игры и программное обеспечение</Title>
            </CatalogItem>
        </CatalogItem>
        <CatalogItem>
            <Title>Электроника</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Бытовая техника</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Работа и офис</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Стройка и ремонт</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Авто и Мото</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Дом и сад</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Красота и спорт</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Детям и мамам</Title>
        </CatalogItem>
        <CatalogItem>
            <Title>Уценка</Title>
        </CatalogItem>
    </ul>
}