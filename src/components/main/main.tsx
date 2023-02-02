import Aside from "../aside/aside";
import Content from "../content/content";
import "./main.css"

export default function Main() {
    return <main className="main">
        <Aside/>
        <Content/>
    </main>
}   