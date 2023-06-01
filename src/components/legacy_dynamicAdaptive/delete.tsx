import { useEffect } from "react";
import useForceUpdate from "../../shared/lib/useForceUpdate";

type PropsType = {
    at: number,
    children: JSX.Element | JSX.Element[],
}

export default function Delete({ at, children }: PropsType) {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        window.addEventListener("resize", forceUpdate);
    }, []);

    if (window.matchMedia(`(max-width:${at}px)`).matches) {
        return null;
    }
    else {
        return <>{children}</>;
    }
}