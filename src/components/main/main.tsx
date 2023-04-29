import "./main.scss"
import Aside from "../aside/aside";
import Content from "../content/content";
import BreadCrumb from "./breadCrumb/breadCrumb";
import BreadCrumbs from "./breadCrumbs/breadCrumbs";

export default function Main() {
    return <main className="main">
        <BreadCrumbs/>
        
            
        <Aside />
        <Content />
    </main>
}   