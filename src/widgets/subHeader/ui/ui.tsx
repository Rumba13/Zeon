import "./styles.scss";
import { ICONS } from "../../../images/images";
import { SubHeaderItem } from "../../../entities/subHeaderItem";
import { UserMenu } from "../../../entities/userMenu";
import { Icon } from "../../../entities/icon";
import { BlurZone } from "../../../entities/blurZone";

export function SubHeader() {
    return <div className="sub-header-menu-wrapper">
        <ul className="sub-header-menu">
            <BlurZone className="sub-header-menu-blur-zone">
                <SubHeaderItem link="##" className="-with-icon">Акция<Icon icon={ICONS.sale} /></SubHeaderItem>
                <SubHeaderItem link="##">Новости</SubHeaderItem>
                <SubHeaderItem link="##">Рассрочка</SubHeaderItem>
                <SubHeaderItem link="##">Как купить</SubHeaderItem>
                <SubHeaderItem link="##">Доставка</SubHeaderItem>
                <SubHeaderItem link="##">Контакты</SubHeaderItem>
                <SubHeaderItem link="##">Клубная Карта</SubHeaderItem>
                <SubHeaderItem link="##">Услуги</SubHeaderItem>
            </BlurZone>

            <UserMenu />
        </ul>
    </div>
}