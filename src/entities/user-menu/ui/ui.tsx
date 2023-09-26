import "./styles.scss";
import { Sprite } from "../../../shared/ui/sprite/ui";
import {  useState } from "react";

export function UserMenu() {
    const [isOpened, setOpened] = useState<boolean>(false);

    return <div className={`user-menu ${isOpened ? "opened" : ""}`} onClick={() => setOpened(!isOpened)}>
        <Sprite yOffset={-849} />
        <a className="user-menu__title">Войти на сайт</a>
        <ul className="user-menu-actions">
            <a className="user-menu__action" href="https://colorscheme.ru/color-names.html">Войти в кабинет</a>
            <a className="user-menu__action" href="##">Зарегистрироваться</a>
        </ul>
    </div>
}