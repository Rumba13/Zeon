import Icon from "../icon/icon";
import "./userMenu.css";

export default function UserMenu() {
    return <div className="user-menu">
        <Icon sprite={{yOffset:-849}}/>
        <a className="user-menu__title">Войти на сайт</a>
        <ul className="user-menu__items">
            <li className="user-menu__item"><a href="##">Войти в кабинет</a></li>
            <li className="user-menu__item"><a href="##">Зарегистрироваться</a></li>
        </ul>
        <div className="usermenu__open-list-icon"></div>
    </div>   
}