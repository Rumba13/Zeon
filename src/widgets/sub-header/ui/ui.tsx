import "./styles.scss";
import saleIcon from "../../../images/sale.png";
import {Icon} from "../../../shared/ui/icon";
import {SubHeaderItem} from "./sub-header-item";
import {UserMenu} from "../../../entities/user-menu";
import {BlurZone} from "../../../shared/ui/blur-zone";


export function SubHeader() {
    return <div className="sub-header-menu-wrapper">
        <ul className="sub-header-menu">
            <BlurZone className="sub-header-menu-blur-zone">
                <SubHeaderItem href="##" className="-with-icon">Акция<Icon icon={saleIcon}/></SubHeaderItem>
                <SubHeaderItem href="##">Новости</SubHeaderItem>
                <SubHeaderItem href="##">Рассрочка</SubHeaderItem>
                <SubHeaderItem href="##">Как купить</SubHeaderItem>
                <SubHeaderItem href="##">Доставка</SubHeaderItem>
                <SubHeaderItem href="##">Контакты</SubHeaderItem>
                <SubHeaderItem href="##">Клубная Карта</SubHeaderItem>
                <SubHeaderItem href="##">Услуги</SubHeaderItem>
            </BlurZone>

            <UserMenu/>
        </ul>
    </div>
}