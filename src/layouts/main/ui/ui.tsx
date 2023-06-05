import "./styles.scss"
import { Routing } from "../../../pages/rounting";
import { Aside } from "../../../widgets/aside";
import { BreadCrumbType, BreadCrumbs } from "../../../entities/breadCrumbs";

const breadCrumbs: BreadCrumbType[] = [
    { title: "Главная", href: "11" },
    { title: "Компьютеры и сети", href: "11" },
    { title: "Компьютеры и комплектующие", href: "11" },
    { title: "Блоки питания", href: "11" },
    { title: "Блок питания be quiet! Pure Power 11 700W CM BN299", href: "11" },
]

export function Main() { //widget/layout
    return <main className="main">
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        <Aside />
        <Routing />
    </main>
}   