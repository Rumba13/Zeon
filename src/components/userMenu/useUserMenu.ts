class UserMenuController {
    constructor() { }
    private readonly OPENED_CLASS = "opened";

    public toggleTitleOpened(title: HTMLElement) {
        title.classList.toggle(this.OPENED_CLASS);
    }
}

const userMenuController = new UserMenuController();

export function useUserMenu(userMenuRef: React.RefObject<HTMLElement>) {

    function onClickCreator() {
        return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if (!userMenuRef.current) return;

            userMenuController.toggleTitleOpened(<HTMLElement>userMenuRef.current)
        }
    }

    return { onClickCreator }
}