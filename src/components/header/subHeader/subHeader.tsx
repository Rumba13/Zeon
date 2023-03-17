import "./subHeader.scss";
import UserMenu from "../../userMenu/userMenu";
import Icon from "../../icon/icon";
import { ICONS } from "../../../images/images";
import SubHeaderItem from "./subHeaderItem/subHeaderItem";

export default function SubHeader() {
    return <div className="sub-header-menu-wrapper">
        <ul className="sub-header-menu">
            <SubHeaderItem link="##" className="-with-icon">
                Акция
                <Icon icon={ICONS.sale} />
            </SubHeaderItem>
            <SubHeaderItem link="##">Новости</SubHeaderItem>
            <SubHeaderItem link="##">Рассрочка</SubHeaderItem>
            <SubHeaderItem link="##">Как купить</SubHeaderItem>
            <SubHeaderItem link="##">Доставка</SubHeaderItem>
            <SubHeaderItem link="##">Контакты</SubHeaderItem>
            <SubHeaderItem link="##">Клубная Карта</SubHeaderItem>
            <SubHeaderItem link="##">Услуги</SubHeaderItem>
            <UserMenu />
        </ul>
    </div>
}