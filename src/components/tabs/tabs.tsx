import TabItem from "../tabItem/tabItem";
import TabTitle from "../tabTitle/tabTitle";
import "./tabs.scss";

type PropsType = {
    items: TabsItem[]
}

type TabsItem = {
    title: string,
    text: string
}

export default function Tabs({ items }: PropsType) {
    return <div className="tabs">
        <div className="tabs-titles">
            {items.map(tab => <TabTitle title={tab.title}/>)}
        </div>
        {items.map(tab => <TabItem text={tab.text} />)}
    </div>
}