import Aside from "../aside/aside";
import BreadCrumb from "../breadCrumb/breadCrumb";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import Content from "../content/content";
import "./main.scss"

export default function Main() {
    return <main className="main">
        <BreadCrumbs>
            <BreadCrumb key="TEST_KEYГлавная" to="">Главная</BreadCrumb>
            <BreadCrumb key="TEST_KEYКомпьютеры и сети" to="">Компьютеры и сети</BreadCrumb>
            <BreadCrumb key="TEST_KEYКомпьютеры и комплектующие" to="">Компьютеры и комплектующие</BreadCrumb>
            <BreadCrumb key="TEST_KEYБлоки питания" to="">Блоки питания</BreadCrumb>
            <BreadCrumb key="TEST_KEYБлок питания be quiet!" to="">Блок питания be quiet! Pure Power 11 700W CM BN299</BreadCrumb>
        </BreadCrumbs>
        <Aside />
        <Content />
    </main>
}   