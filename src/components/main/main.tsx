import "./main.scss"
import Aside from "../aside/aside";
import Content from "../content/content";
import BreadCrumbs from "./breadCrumbs/breadCrumbs";
import { DynamicAdaptive } from "../dynamicAdaptive/dynamicAdaptive";

export default function Main() {
    return <main className="main">
        <BreadCrumbs />
        <Aside />
        <Content />
    </main>
}   