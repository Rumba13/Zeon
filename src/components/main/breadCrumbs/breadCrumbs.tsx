import BreadCrumb from "../breadCrumb/breadCrumb";
import "./breadCrumbs.scss";

type PropsType = {

}

type BreadCrumbType = {
    text: string,
    link: string
}

const breadCrumbs: BreadCrumbType[] = [
    { text: "Главная", link: "11" },
    { text: "Компьютеры и сети", link: "11" },
    { text: "Компьютеры и комплектующие", link: "11" },
    { text: "Блоки питания", link: "11" },
    { text: "Блок питания be quiet! Pure Power 11 700W CM BN299", link: "11" },
]

export default function BreadCrumbs({ }: PropsType) {

    return <div className="bread-crumbs">

        {breadCrumbs.map((crumb, index, crumbs) =>
            <BreadCrumb to={crumb.link} isLast={index === crumbs.length - 1}>
                {crumb.text}
            </BreadCrumb>
        )}
        
    </div>
}