import { useContext, useEffect } from "react";
import useForceUpdate from "../../shared/lib/useForceUpdate";
import { DynamicAdaptiveContext } from "./context";

type PropsType = {
    moveToMark: string,
}

export default function Insert({ moveToMark }: PropsType): JSX.Element {
    const adaptiveRecords = useContext(DynamicAdaptiveContext);
    const forceUpdate = useForceUpdate();

    useEffect(() => window.addEventListener("resize", forceUpdate), []);

    return <>
        {adaptiveRecords.findAll(moveToMark).map(record => record.content)}
    </>
}