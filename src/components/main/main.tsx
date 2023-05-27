import "./main.scss"
import Aside from "../aside/aside";
import Routing from "../rounting/rounting";
import BreadCrumbs from "./breadCrumbs/breadCrumbs";

export default function Main() {
    return <main className="main">
        <BreadCrumbs />
        <Aside />
        <Routing />
    </main>
}   