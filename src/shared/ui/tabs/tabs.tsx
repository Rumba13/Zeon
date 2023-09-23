import "./styles.scss";
import { useEffect } from "react";
import { ReactNode } from "react";
import { TabContent } from "./tab-content";
import { TabPanel } from "./tab-panel";
import { useTabs } from "../../lib/use-tabs";

type PropsType = {
    tabs: TabType[],
    className: string,
    children?: ReactNode
}

export type TabType = {
    title: ReactNode,
    content: ReactNode
}

export function Tabs({ tabs, className }: PropsType) {
    const { tabsPanelsRef, tabsContentsRef, openTab } = useTabs();

    useEffect(() => {
        openTab(0);
    }, [openTab])

    return <div className={`tabs ${className ?? ""}`}>
        <div ref={tabsPanelsRef} className="tab-panels">
            {tabs.map((tab, index) => <TabPanel openTab={() => openTab(index)}>{tab.title}</TabPanel>)}
        </div>
        <div ref={tabsContentsRef} className="tab-contents">
            {tabs.map(tab => <TabContent>{tab.content}</TabContent>)}
        </div>
    </div>
}