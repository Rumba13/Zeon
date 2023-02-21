import React from "react";
import { ReactNode } from "react";
import "./tabs.scss";

type PropsType = {
    tabs: TabType[],
    className: string
}

export type TabType = {
    title: string,
    content: ReactNode
}

export default function Tabs({ tabs, className }: PropsType) {
    const tabsTitlesRef = React.createRef<HTMLDivElement>();
    const tabsContentRef = React.createRef<HTMLDivElement>();

    function tabClickHandler(index: number) {
        if (!tabsTitlesRef.current || !tabsContentRef.current) return;

        const tabsTitles = Array.from(tabsTitlesRef.current.children);
        const tabsContent = Array.from(tabsContentRef.current.children)

        removeOpenedClasses(tabsTitles)
        removeOpenedClasses(tabsContent)

        addOpenedClass(tabsTitles[index])
        addOpenedClass(tabsContent[index])

        function addOpenedClass(element: Element) {
            element.classList.add("opened");
        }
        function removeOpenedClasses(elements: Element[]) {
            elements.forEach(element => element.classList.remove("opened"))
        }
    }

    function getTabClassName() {
        let tabClassName = "tabs";
        if (className) {
            tabClassName += " " + className;
        }
        return tabClassName;
    }

    return <div className={getTabClassName()}>
        <div ref={tabsTitlesRef} className="tabs-titles">
            {tabs.map((tab, index) => <span onClick={() => tabClickHandler(index)} className="tab__title">{tab.title}</span>)}
        </div>
        <div ref={tabsContentRef} className="tabs-content">
            {tabs.map(tab => <span className="tab__content">{tab.content}</span>)}
        </div>
    </div>
}