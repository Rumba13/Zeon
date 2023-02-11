import CatalogItem from "../catalogItem/catalogItem";
import "./catalog.scss";


type ListItemType = {
    title: string,
    childs?: ListItemType[]
}

type PropsType = {
    // listItems: ListItemType[]
}


const listItems: ListItemType[] = [
    {
        title: "Компьютеры и сети",
        childs:
            [
                {
                    title: "Компьютеры и комплектующие",
                    childs:
                        [
                            {
                                title: "SSD",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Блоки питания",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Видеокарты",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Жесткие диски",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Звуковые карты",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Компьютеры",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Корпуса",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Материнские платы",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Моноблоки",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Оперативная память",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Оптические накопители",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Процессоры",
                                childs:
                                    [
                                        
                                    ]
                            },
                            {
                                title: "Системы охлаждения",
                                childs:
                                    [
                                        
                                    ]
                            }
                        ]
                },
                {
                    title: "Ноутбуки и аксессуары",
                    childs:
                        [

                        ]
                },
                {
                    title: "Периферия",
                    childs:
                        [

                        ]
                },
                {
                    title: "Сетевое оборудование",
                    childs:
                        [

                        ]
                },
                {
                    title: "Техника для печати и дизайна",
                    childs:
                        [

                        ]
                },
                {
                    title: "Игры и программное обеспечение",
                    childs:
                        [

                        ]
                },
            ]
    },
    {
        title: "Электроника",
        childs:
            [
                {
                    title: "Аксессуары для телефонов",
                    childs:
                        [

                        ]
                },
                {
                    title: "Аудиотехника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Гаджеты",
                    childs:
                        [

                        ]
                },
                {
                    title: "Музыкальное оборудование",
                    childs:
                        [

                        ]
                },
                {
                    title: "Планшеты, электронные книги",
                    childs:
                        [

                        ]
                },
                {
                    title: "Телевидение и видео",
                    childs:
                        [

                        ]
                },
                {
                    title: "Телефония и связь",
                    childs:
                        [

                        ]
                },
                {
                    title: "Фото и видеотехника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Игровая зона",
                    childs:
                        [

                        ]
                },
            ]
    },
    {
        title: "Бытовая техника",
        childs:
            [
                {
                    title: "Встраиваемая техника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Климатическая техника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Крупногабаритная техника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Подготовка и обработка продуктов",
                    childs:
                        [

                        ]
                },
                {
                    title: "Приготовление кофе и чая",
                    childs:
                        [

                        ]
                },
                {
                    title: "Приготовление пищи",
                    childs:
                        [

                        ]
                },
                {
                    title: "Уборка, уход за одеждой, пошив",
                    childs:
                        [

                        ]
                },
                {
                    title: "Уход за волосами и телом",
                    childs:
                        [

                        ]
                },
            ]
    },
    {
        title: "Работа и офис",
        childs:
            [
                {
                    title: "Гигиена и питание",
                    childs:
                        [

                        ]
                },
                {
                    title: "Издательство и печать",
                    childs:
                        [

                        ]
                },
                {
                    title: "Офисная техника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Офисная мебель",
                    childs:
                        [

                        ]
                },
                {
                    title: "Торговля и финансы",
                    childs:
                        [

                        ]
                },
            ]
    },
    {
        title: "Стройка и ремонт",
        childs:
            [
                {
                    title: "Аксессуары",
                    childs:
                        [

                        ]
                },
                {
                    title: "Инструмент",
                    childs:
                        [

                        ]
                },
                {
                    title: "Оснастка и расходники",
                    childs:
                        [

                        ]
                },
                {
                    title: "Отопление, водоснабжение, вентиляция",
                    childs:
                        [

                        ]
                },
                {
                    title: "Сантехника",
                    childs:
                        [

                        ]
                }, {
                    title: "Станки",
                    childs:
                        [

                        ]
                },
                {
                    title: "Строительное оборудование, инструмент",
                    childs:
                        [

                        ]
                }, {
                    title: "Строительные и отделочные материалы",
                    childs:
                        [

                        ]
                }, {
                    title: "Крепежные изделия",
                    childs:
                        [

                        ]
                }, {
                    title: "Стройка и ремонт",
                    childs:
                        [

                        ]
                }, {
                    title: "Двери",
                    childs:
                        [

                        ]
                },
            ]
    },
    {
        title: "Авто и Мото",
        childs:
            [
                {
                    title: "Аксессуары",
                    childs:
                        [

                        ]
                },
                {
                    title: "Автоэлектроника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Мототехника",
                    childs:
                        [

                        ]
                },
                {
                    title: "Масла и технические жидкости",
                    childs:
                        [

                        ]
                },
                {
                    title: "Запчасти",
                    childs:
                        [

                        ]
                },
                {
                    title: "Шины и диски",
                    childs:
                        [

                        ]
                },
                {
                    title: "Автохимия и автокосметика",
                    childs:
                        [

                        ]
                },
            ]
    },
    {
        title: "Дом и сад",
        childs:
            [
                {
                    title: "Видеонаблюдение и безопасность",
                    childs:
                        [

                        ]
                },
                {
                    title: "Водоснабжение и отопление",
                    childs:
                        [

                        ]
                },
                {
                    title: "Все для ванной комнаты",
                    childs:
                        [

                        ]
                },
                {
                    title: "Зоотовары",
                    childs:
                        [

                        ]
                },
                {
                    title: "Мебель и интерьер",
                    childs:
                        [

                        ]
                },
                {
                    title: "Обустройство участка",
                    childs:
                        [

                        ]
                },
                {
                    title: "ПОДСОБНОЕ ХОЗЯЙСТВО",
                    childs:
                        [

                        ]
                },
                {
                    title: "Праздники",
                    childs:
                        [

                        ]
                },
                {
                    title: "Растениеводство",
                    childs:
                        [

                        ]
                },
                {
                    title: "Садовая техника и инструменты",
                    childs:
                        [

                        ]
                },
                {
                    title: "Умный дом",
                    childs:
                        [

                        ]
                },
                {
                    title: "Стирка, уборка",
                    childs:
                        [

                        ]
                },
                {
                    title: "Кухонные инструменты и принадлежности",
                    childs:
                        [

                        ]
                },
                {
                    title: "Хозтовары",
                    childs:
                        [

                        ]
                }
            ]
    },
    {
        title: "Красота и спорт",
        childs:
            [
                {
                    title: "Велосипеды и самокаты",
                    childs:
                        [

                        ]
                },
                {
                    title: "Гироскутеры",
                    childs:
                        [

                        ]
                },
                {
                    title: "Здоровье",
                    childs:
                        [

                        ]
                },
                {
                    title: "Зимние виды спорта",
                    childs:
                        [

                        ]
                },
                {
                    title: "Летние виды спорта",
                    childs:
                        [

                        ]
                },
                {
                    title: "Одежда, обувь, аксессуары",
                    childs:
                        [

                        ]
                },
                {
                    title: "Рыбалка",
                    childs:
                        [

                        ]
                },
                {
                    title: "Красота и спорт",
                    childs:
                        [

                        ]
                },
                {
                    title: "Тренажеры и инвентарь",
                    childs:
                        [

                        ]
                },
                {
                    title: "Туризм и активный отдых",
                    childs:
                        [

                        ]
                },
                {
                    title: "Хобби",
                    childs:
                        [

                        ]
                },
                {
                    title: "Гигиена и уход",
                    childs:
                        [

                        ]
                },
            ]
    },

    {
        title: "Детям и мамам",
        childs:
            [
                {
                    title: "Детская мебель",
                    childs:
                        [

                        ]
                },
                {
                    title: "Детский транспорт",
                    childs:
                        [

                        ]
                },
                {
                    title: "Игры для малышей",
                    childs:
                        [

                        ]
                },
                {
                    title: "Игры и игрушки",
                    childs:
                        [

                        ]
                },
                {
                    title: "Уход за новорожденными",
                    childs:
                        [

                        ]
                },
                {
                    title: "Игры на улице и спорт",
                    childs:
                        [

                        ]
                },
                {
                    title: "Товары для школы",
                    childs:
                        [

                        ]
                }
            ]
    },
    {
        title: "Уценка",
        childs:
            [
                {
                    title: "Распродажа",
                    childs:
                        [
                            {
                                title: "БУ под заказ",
                            },
                            {
                                title: "Уценённый товар",
                            }
                        ]
                }
            ]
    }
]


function showCatalogListItems(listItems: ListItemType[]) {
    return listItems.map(li => <CatalogItem title={li.title}>{li.childs && showCatalogListItems(li.childs)}</CatalogItem>)
}

export default function Catalog(/*{ listItems }: PropsType*/) {

    return <ul className="catalog">
        {showCatalogListItems(listItems)}
    </ul>
}