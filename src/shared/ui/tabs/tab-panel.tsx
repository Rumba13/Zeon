import "./styles.scss"

type PropsType = {
    children:React.ReactNode,
    openTab:Function,
}

export function TabPanel({openTab, children:title}:PropsType) {
    return <span onClick={() => openTab()} className="tab__panel" key={String(title)}>{title}</span>
}