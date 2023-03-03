
type UlType = HTMLElement | undefined;

class ListController { //TODO hook

    constructor() { }

    public closeUlChilds(ul: UlType = this.currentUl) {
        if (!ul) return null;

        Array.from(ul.children).forEach(li => {

            const childUl = li.querySelector("ul");

            if (childUl) this.closeUl(childUl);
        })
    }
    public closeUls(ul: UlType = this.currentUl) {
        const parent = ul?.parentElement?.parentElement;

        parent && this.closeUlChilds(parent);
    }
    public closeUl(ul: UlType = this.currentUl) {
        if (ul && !this.isUlClosed(ul)) {
            this.toggleUl(ul)
        }
    }
    public toggleUl(ul: UlType = this.currentUl) {
        if (!ul) {
            return null;
        }
        if (!ul.style.height || ul.style.height === "0px") {
            ul.style.height = `${ul.scrollHeight}px`
        } else {
            ul.style.height = `${ul.scrollHeight}px`;
            window.getComputedStyle(ul, null).getPropertyValue("height");
            ul.style.height = "0px";
        }
    }
    public isUlClosed(ul: UlType = this.currentUl) {
        return ul && (!ul.style.height || ul.style.height === "0px")
    }
    public setCurrentUl(ul: UlType = this.currentUl) { //legacy
        this.currentUl = ul;
    }
    public endUlAnimationCreator(ul: HTMLElement) {
        return () => {
            if (ul.style.height !== "0px") {
                ul.style.height = "auto"
            }
        }
    }

    private currentUl?: UlType;

}

const listController = new ListController();

export function useCatalog(catalogItemsRef: React.RefObject<HTMLUListElement>) {

    function catalogLiOnClickCreator(catalogItemsRef: React.RefObject<HTMLUListElement>) {
        return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.stopPropagation();

            if (!catalogItemsRef || !catalogItemsRef.current) {
                return null;
            }

            const ul = catalogItemsRef.current;

            listController.setCurrentUl(ul);

            ul.ontransitionend = listController.endUlAnimationCreator(ul)

            if (!listController.isUlClosed()) {
                listController.closeUlChilds();
            }
            else {
                listController.closeUls()
            }
            listController.toggleUl();
        }
    }

    return { catalogLiOnClick: catalogLiOnClickCreator(catalogItemsRef) }
}
