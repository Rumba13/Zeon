import "./tabItem.scss";

type PropsType = {
    text: string
}

export default function TabItem({ text }: PropsType) {
    return <div className="tab-item">{text}</div>
}