import "./styles.scss";
import { Breadcrumb } from "antd";

type PropsType = {}


export function BreadCrumbs({ }: PropsType) {
    return <Breadcrumb className="bread-crumbs" separator=">" items={[
        { title: "Главная", href: "11" },
        { title: "Компьютеры и сети", href: "11" },
        { title: "Компьютеры и комплектующие", href: "11" },
        { title: "Блоки питания", href: "11" },
        { title: "Блок питания be quiet! Pure Power 11 700W CM BN299"},
    ]} />
}