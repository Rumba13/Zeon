const OPENED_TAB_CLASS = "opened";


export default function useTabs(tabsListRef:React.RefObject<HTMLElement>, tabsPanelsRef:React.RefObject<HTMLElement>) {

    function openTabByIndex(index: number) {
        if (!tabsListRef.current || !tabsPanelsRef.current)  {
            return null;
        }

        const tabsList = Array.from(tabsListRef.current.children);
        const tabsPanels = Array.from(tabsPanelsRef.current.children)

        closeTabs(tabsList)
        closeTabs(tabsPanels)

        openTab(tabsList[index])
        openTab(tabsPanels[index])

        function openTab(element: Element) {
            element.classList.add(OPENED_TAB_CLASS);
        }
        function closeTabs(elements: Element[]) {
            elements.forEach(element => element.classList.remove(OPENED_TAB_CLASS))
        }
    }

    return {openTabByIndex}
}