import "./styles.scss"
import { Routing } from "../../../pages/rounting";
import { Aside } from "../../../widgets/aside";
import { BreadCrumbs } from "../../../entities/breadCrumbs";

export function Main() { //widget/layout
    return <main className="main">
        <BreadCrumbs />
        <Aside />
        <Routing />
    </main>
}   