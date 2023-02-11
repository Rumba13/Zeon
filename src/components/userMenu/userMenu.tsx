import Sprite from "../sprite/sprite";
import "./userMenu.scss";

export default function UserMenu() {
    return <div className="user-menu">
        <Sprite yOffset={-849} />
        <a className="user-menu__title">Войти на сайт</a>
        <ul className="user-menu-items">
            <li className="user-menu__item"><a href="##">Войти в кабинет</a></li>
            <li className="user-menu__item"><a href="##">Зарегистрироваться</a></li>
        </ul>
        <div className="open-list-icon"></div>
    </div>
}