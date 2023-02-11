import Aside from "../aside/aside";
import Content from "../content/content";
import "./main.scss"

export default function Main() {
    return <main className="main">
        <Aside/>
        <Content/>
    </main>
}   