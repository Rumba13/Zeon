export class ListController {
    constructor() { }

    private _closeList(list: HTMLElement) {
        if (list && this.isListOpen(list)) {
            this.toggleList(list)
        }
    }
    private setListMaxHeight(list: HTMLElement) {
        list.style.height = `${list.scrollHeight}px`
    }
    private forceBrowserApplyHeight(list: HTMLElement) {
        (() => list.clientHeight)();  //list.clientHeight forces browser to apply max ul height(function wrapper need to prevent EsLint error)
    }

    private isListOpen(list: HTMLElement) {
        return !(!list.style.height || list.style.height === "0px")
    }

    private closeListItems(list: HTMLElement) {
        const listItems = Array.from(list.children);

        listItems.forEach(item => {
            const childList = item.querySelector("ul");
            childList && this._closeList(childList as HTMLElement);
        })
    }

    private closeOneLevelLists(list: HTMLElement) {
        const parent = list.parentElement?.parentElement;
        parent && this.closeListItems(parent);
    }

    public toggleList(list: HTMLElement) {
        if (this.isListOpen(list)) {
            this.closeListItems(list);
            this.closeList(list);

        } else {
            this.closeOneLevelLists(list);
            this.openList(list)
        }
    }
  
    private closeList(list: HTMLElement) {
        this.setListMaxHeight(list)
        this.forceBrowserApplyHeight(list);

        list.style.height = "0px";
    }

    private openList(list: HTMLElement) {
        this.setListMaxHeight(list)
    }

    public onListAnimationEndCreator(list: HTMLElement) {
        return () => {
            if (list.style.height !== "0px") {
                list.style.height = "auto"
            }
        }
    }
}
