import { Sprite } from "../../sprite";
import "./styles.scss";
import {  useState } from "react";

export function UserMenu() {
    const [isMenuOpened, setMenuOpened] = useState<boolean>(false);

    return <div className={`user-menu ${isMenuOpened ? "opened" : ""}`} onClick={() => setMenuOpened(!isMenuOpened)}>
        <Sprite yOffset={-849} />
        <a className="user-menu__title">Войти на сайт</a>
        <ul className="user-menu-actions">
            <a className="user-menu__action" href="https://colorscheme.ru/color-names.html">Войти в кабинет</a>
            <a className="user-menu__action" href="##">Зарегистрироваться</a>
        </ul>
    </div>
}