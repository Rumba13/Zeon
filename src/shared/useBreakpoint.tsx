import { useEffect, useReducer } from "react";
import useForceUpdate from "./useForceUpdate";

type AdaptiveComponentType = {
    component: JSX.Element,
    breakpointAt?: number,
    isBasic: boolean
}

class AdaptiveComponents {
    private componentObjects: AdaptiveComponentType[] = [];

    constructor(component: JSX.Element) {
        this._addBreakpoint({ component, isBasic: true });
    }
    private _addBreakpoint(adaptiveComponent: AdaptiveComponentType) {
        this.componentObjects.push(adaptiveComponent);
    }
    public addBreakpoint(breakpointAt: number, component: JSX.Element) {
        this._addBreakpoint({ component, breakpointAt, isBasic: false })
    }
    private sortComponents() {
        this.componentObjects.sort((componentObjectA, componentObjectB) => {
            if (componentObjectA.isBasic) {
                return 1
            }
            if (componentObjectB.isBasic) {
                return -1
            }

            return Number(componentObjectA.breakpointAt) - Number(componentObjectB.breakpointAt)
        });
    }
    public getComponent() {//TODO refactor
        this.sortComponents();
        var componentObject = this.componentObjects[0];

        for (let i = this.componentObjects.length - 1; i >= 0; i--) {
            const currentComponentObject = this.componentObjects[i];
            const mediaQueryList = window.matchMedia(`(max-width: ${currentComponentObject.breakpointAt}px)`);

            if (currentComponentObject.isBasic || mediaQueryList.matches) {
                componentObject = currentComponentObject;
            }
        }

        return componentObject.component
    }
}

export default function useBreakpoint(component: JSX.Element) {
    const forceUpdate = useForceUpdate();
    const adaptiveComponents = new AdaptiveComponents(component);
    
    useEffect(() => window.addEventListener("resize", forceUpdate), [])
    return adaptiveComponents;
}