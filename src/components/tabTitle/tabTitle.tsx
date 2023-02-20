import "./tabTitle.scss";

type PropsType = {
title:string
}

export default function TabTitle({title}:PropsType) {
    return <div className="tab-title">{title}</div>
}