import "./main.scss"
import Aside from "../aside/aside";
import BreadCrumbs from "./breadCrumbs/breadCrumbs";
import { Routing } from "../../pages/rounting";

export default function Main() {
    return <main className="main">
        <BreadCrumbs />
        <Aside />
        <Routing />
    </main>
}   