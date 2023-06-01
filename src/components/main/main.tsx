import "./main.scss"
import Aside from "../aside/aside";
import BreadCrumbs from "./breadCrumbs/breadCrumbs";
import { Routing } from "../../pages/rounting";

export default function Main() { //widget/layout
    return <main className="main">
        <BreadCrumbs />
        <Aside />
        <Routing />
    </main>
}   