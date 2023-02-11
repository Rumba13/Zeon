import { log } from "console";
import React from "react";
import Sprite from "../sprite/sprite";
import "./catalogItem.scss";

type PropsType = {
    title: string,
    children?: React.ReactNode
}

type CurrentUlType = HTMLElement | undefined;

class ListController {

    constructor() { }

    public isCurrentUlOpen(currentUl: CurrentUlType = this.currentUl) {
        return currentUl?.parentElement?.classList.contains("list-open");
    }
    public closeAllCurrentUlChildsUl(currentUl: CurrentUlType = this.currentUl) {
        if (!currentUl) return;
        Array.from(currentUl.children).forEach(li => {

            const childUl = li.querySelector("ul");
                
                if (childUl) this.closeCurrentUl(childUl);

        })
    }
    public toggleCurrentUlOpenState(currentUl: CurrentUlType = this.currentUl) {
        currentUl?.parentElement?.classList.toggle("list-open");
    }
    public closeCurrentUl(currentUl: CurrentUlType = this.currentUl) {
        currentUl?.parentElement?.classList.remove("list-open");
    }
    public openCurrentUl(currentUl: CurrentUlType = this.currentUl) {
        currentUl?.parentElement?.classList.add("list-open");
    }
    public setCurrentUl(currentUl: CurrentUlType = this.currentUl) {
        this.currentUl = currentUl;
    }
    public closeOtherUlOnCurrentLevel(currentUl: CurrentUlType = this.currentUl) {
        const parent = currentUl?.parentElement?.parentElement;

        if (parent) {
            this.closeAllCurrentUlChildsUl(parent)
        }
    }
    private currentUl?: CurrentUlType;
}

const listController = new ListController();

function onClickHandler(e: React.MouseEvent<HTMLElement, MouseEvent>, catalogItemsRef: React.RefObject<HTMLUListElement>) {
    e.stopPropagation();

    if (!catalogItemsRef || !catalogItemsRef.current) return;

    const currentUl = catalogItemsRef.current;

    listController.setCurrentUl(currentUl)

    if (listController.isCurrentUlOpen()) {
        listController.closeAllCurrentUlChildsUl();
        listController.closeCurrentUl();
    }
    else {
        listController.closeOtherUlOnCurrentLevel()
        listController.openCurrentUl();
    }
}

export default function CatalogItem({ title, children }: PropsType) {
    const catalogItemsRef = React.createRef<HTMLUListElement>();


    return <li onClick={(e) => onClickHandler(e, catalogItemsRef)} className="catalog-item-wrapper">
        <div className="catalog-item">
            <span className="catalog-item__text">{title}</span>
            <Sprite yOffset={null} />
        </div>
        <ul ref={catalogItemsRef} className="catalog-items">
            {children}
        </ul>
    </li>
}