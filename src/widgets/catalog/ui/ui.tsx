import { CatalogItem } from "./catalogItem";
import "./styles.scss";

export function Catalog() {
    return <ul className="catalog">
        <CatalogItem>
            Компьютеры и сети
            <CatalogItem>
                Компьютеры и комплектующие
                <CatalogItem> SSD</CatalogItem>
                <CatalogItem>Блоки питания</CatalogItem>
                <CatalogItem>
                    Видеокарты
                </CatalogItem>
                <CatalogItem>
                    Жесткие диски
                </CatalogItem>
                <CatalogItem>
                    Звуковые карты
                </CatalogItem>
                <CatalogItem>
                    Компьютеры
                </CatalogItem>
                <CatalogItem>
                    Корпуса
                </CatalogItem>
                <CatalogItem>
                    Материнские платы
                </CatalogItem>
                <CatalogItem>
                    Моноблоки
                </CatalogItem>
                <CatalogItem>
                    Оперативная память
                </CatalogItem>
                <CatalogItem>
                    Оптические накопители
                </CatalogItem>
                <CatalogItem>
                    Процессоры
                </CatalogItem>
                <CatalogItem>
                    Системы охлаждения
                </CatalogItem>
            </CatalogItem>
            <CatalogItem>
                Ноутбуки и аксессуары
            </CatalogItem>
            <CatalogItem>
                Периферия
            </CatalogItem>
            <CatalogItem>
                Сетевое оборудование
            </CatalogItem>
            <CatalogItem>
                Техника для печати и дизайна
            </CatalogItem>
            <CatalogItem>
                Игры и программное обеспечение
            </CatalogItem>
        </CatalogItem>
        <CatalogItem>
            Электроника
        </CatalogItem>
        <CatalogItem>
            Бытовая техника
        </CatalogItem>
        <CatalogItem>
            Работа и офис
        </CatalogItem>
        <CatalogItem>
            Стройка и ремонт
        </CatalogItem>
        <CatalogItem>
            Авто и Мото
        </CatalogItem>
        <CatalogItem>
            Дом и сад
        </CatalogItem>
        <CatalogItem>
            Красота и спорт
        </CatalogItem>
        <CatalogItem>
            Детям и мамам
        </CatalogItem>
        <CatalogItem>
            Уценка
        </CatalogItem>
    </ul>
}