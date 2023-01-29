import UserMenu from "../userMenu/userMenu";
import "./subheader.css";

export default function Subheader() {
    return <div className="sub-header-menu-wrapper">
        <ul className="sub-header-menu">
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Акция
                </a>
            </li>
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Новости
                </a>
            </li>
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Рассрочка
                </a>
            </li>
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Как купить
                </a>
            </li>
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Доставка
                </a>
            </li>
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Контакты
                </a>
            </li>
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Клубная Карта
                </a>
            </li>
            <li className="sub-header-menu-item-wrapper">
                <a href="##" className="item__text">
                    Услуги
                </a>
            </li>
        <UserMenu/>
        </ul>
    </div>
}