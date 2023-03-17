import React, { useEffect } from "react";
import { ReactNode } from "react";
import "./tabs.scss";
import useTabs from "./useTabs";

type PropsType = {
    tabs: TabType[],
    className: string,
    children?: ReactNode
}

export type TabType = {
    title: ReactNode,
    content: ReactNode
}

export default function Tabs({ tabs, className }: PropsType) {
    const tabsListRef = React.createRef<HTMLDivElement>();
    const tabsPanelsRef = React.createRef<HTMLDivElement>();

    const { openTabByIndex } = useTabs(tabsListRef, tabsPanelsRef);

    useEffect(() => {
        openTabByIndex(0);
    }, [])

    return <div className={`tabs ${className}`}>
        <div ref={tabsListRef} className="tab-list">
            {tabs.map((tab, index) => <span onClick={() => openTabByIndex(index)} className="tab__title">{tab.title}</span>)}
        </div>
        <div ref={tabsPanelsRef} className="tab-panels">
            {tabs.map(tab => <span className="tab__panel">{tab.content}</span>)}
        </div>
    </div>
}