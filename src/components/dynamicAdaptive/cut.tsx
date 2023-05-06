import { useContext, useEffect, useState } from "react"
import useForceUpdate from "../../app/hooks/useForceUpdate"
import { DynamicAdaptiveContext } from "./context"

type PropsType = {
    at: number,
    moveTo: string,
    children: JSX.Element | JSX.Element[],
}

export default function Cut({ at, moveTo, children }: PropsType) {
    const dynamicAdaptiveRecords = useContext(DynamicAdaptiveContext);
    const [id, setId] = useState<number>(dynamicAdaptiveRecords.id);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        window.addEventListener("resize", forceUpdate);
        dynamicAdaptiveRecords.addRecord({ content: children, moveTo, id })

    }, []);

    if (window.matchMedia(`(max-width:${at}px)`).matches) {
        dynamicAdaptiveRecords.addRecord({ content: children, moveTo, id })
        return null;
    }
    else {
        dynamicAdaptiveRecords.removeRecord(moveTo);
        return <>{children}</>;
    }
}