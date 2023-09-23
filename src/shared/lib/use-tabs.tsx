import React from "react";

export function useTabs() {
    const tabsContentsRef = React.createRef<HTMLDivElement>();
    const tabsPanelsRef = React.createRef<HTMLDivElement>();

    const OPENED_TAB_CLASS = "opened";
    
    function openTab(index: number) {
        if (!tabsContentsRef.current || !tabsPanelsRef.current) {
            return;
        }

        const tabsContents = Array.from(tabsContentsRef.current.children);
        const tabsPanels = Array.from(tabsPanelsRef.current.children)

        closeTabs(tabsContents)
        closeTabs(tabsPanels)

        openTab(tabsContents[index])
        openTab(tabsPanels[index])

        function openTab(element: Element) {
            element.classList.add(OPENED_TAB_CLASS);
        }
        function closeTabs(elements: Element[]) {
            elements.forEach(element => element.classList.remove(OPENED_TAB_CLASS))
        }
    }

    return { openTab,tabsContentsRef,tabsPanelsRef }
}