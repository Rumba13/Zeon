import React from "react";

export const OPENED_TAB_CLASS = "opened";

export function useTabs() {
    const tabsContentsRef = React.createRef<HTMLDivElement>();
    const tabsPanelsRef = React.createRef<HTMLDivElement>();

    function openTab(index: number) {
        if (!tabsContentsRef.current || !tabsPanelsRef.current) {
            return;
        }

        const tabsContents = Array.from(tabsContentsRef.current.children);
        const tabsPanels = Array.from(tabsPanelsRef.current.children)

        tabsPanels.forEach(closeTab);
        tabsContents.forEach(closeTab);

        openTab(tabsContents[index]);
        openTab(tabsPanels[index]);

        function openTab(element: Element) {
            element.classList.add(OPENED_TAB_CLASS);
        }

        function closeTab(element: Element) {
            element.classList.remove(OPENED_TAB_CLASS);
        }
    }

    return {openTab, tabsContentsRef, tabsPanelsRef}
}