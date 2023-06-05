import "./styles.scss";
import { ICONS } from "../../../images/images";
import { SubHeaderItem } from "../../../entities/subHeaderItem";
import { UserMenu } from "../../../entities/userMenu";
import { BlurZone } from "../../../shared/ui/blurZone";
import { Icon } from "../../../shared/ui/icon";

export function SubHeader() {
    return <div className="sub-header-menu-wrapper">
        <ul className="sub-header-menu">
            <BlurZone className="sub-header-menu-blur-zone">
                <SubHeaderItem href="##" className="-with-icon">Акция<Icon icon={ICONS.sale} /></SubHeaderItem>
                <SubHeaderItem href="##">Новости</SubHeaderItem>
                <SubHeaderItem href="##">Рассрочка</SubHeaderItem>
                <SubHeaderItem href="##">Как купить</SubHeaderItem>
                <SubHeaderItem href="##">Доставка</SubHeaderItem>
                <SubHeaderItem href="##">Контакты</SubHeaderItem>
                <SubHeaderItem href="##">Клубная Карта</SubHeaderItem>
                <SubHeaderItem href="##">Услуги</SubHeaderItem>
            </BlurZone>

            <UserMenu />
        </ul>
    </div>
}