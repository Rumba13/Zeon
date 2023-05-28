import "./userMenu.scss";
import Sprite from "../sprite/sprite";
import { useUserMenu } from "./useUserMenu";
import { useRef } from "react";

export default function UserMenu() {
    const userMenuRef = useRef(null)
    const { toggleUserMenu } = useUserMenu(userMenuRef);

    return <div onClick={toggleUserMenu} ref={userMenuRef} className="user-menu">
        <Sprite yOffset={-849} />
        <a className="user-menu__title">Войти на сайт</a>
        <ul className="user-menu-actions">
            <a className="user-menu__action" href="https://colorscheme.ru/color-names.html">Войти в кабинет</a>
            <a className="user-menu__action" href="##">Зарегистрироваться</a>
        </ul>
    </div>
}