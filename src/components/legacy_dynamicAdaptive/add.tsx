import { useContext, useEffect } from "react";
import useForceUpdate from "../../shared/lib/useForceUpdate";
import { DynamicAdaptiveContext } from "./context";

type PropsType = {
    children: JSX.Element,
    minWidth?: never
    maxWidth?: string

} | {
    children: JSX.Element,
    minWidth?: string
    maxWidth?: never
}

type MediaQuerySelectorType = "max-width" | "min-width";

class MediaQueryGenerator {
    constructor() { }


    private getMediaQuerySelector(maxWidth?: string, minWidth?:string): MediaQuerySelectorType {
        let mediaQuerySelector: MediaQuerySelectorType;

        if(!maxWidth && !minWidth) {
            throw new Error("MaxWidth Or minWidth should be present")
        }

        if (!!maxWidth) {
            mediaQuerySelector = "max-width";
        }
        else {
            mediaQuerySelector = "min-width";
        }

        return mediaQuerySelector;
    }
    private getSelectorValue(selector: MediaQuerySelectorType, maxWidth?: string, minWidth?: string): string | undefined {

        if (selector === "max-width") {
            return maxWidth
        }
        else {
            return minWidth
        }
    }
    public getMediaQuery(maxWidth?: string, minWidth?: string): string {
        const selector = this.getMediaQuerySelector(maxWidth, minWidth);
        const selectorValue = this.getSelectorValue(selector, maxWidth, minWidth);

        return `(${selector}:${selectorValue} )`;
    }
}

export default function Add({ children, minWidth, maxWidth }: PropsType): JSX.Element {
    const forceUpdate = useForceUpdate();
    const mediaQueryGenerator = new MediaQueryGenerator()

    useEffect(() => window.addEventListener("resize", forceUpdate), []);

    if (window.matchMedia(mediaQueryGenerator.getMediaQuery(maxWidth, minWidth)).matches) {
        return children
    }
    else {
        return <>no</>;
    }
}