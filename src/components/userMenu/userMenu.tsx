import "./userMenu.scss";
import Sprite from "../sprite/sprite";
import { useUserMenu } from "./useUserMenu";
import { useRef } from "react";

export default function UserMenu() {
    const userMenuRef = useRef(null)
    const { onClickCreator } = useUserMenu(userMenuRef);

    return <div onClick={onClickCreator()} ref={userMenuRef} className="user-menu">
        <Sprite yOffset={-849} />
        <a className="user-menu__title">Войти на сайт</a>
        <ul className="user-menu-items">
                <a className="user-menu__item" href="https://colorscheme.ru/color-names.html">Войти в кабинет</a>
               <a className="user-menu__item"href="##">Зарегистрироваться</a>
        </ul>
        <div className="open-list-icon"></div>
    </div>
}