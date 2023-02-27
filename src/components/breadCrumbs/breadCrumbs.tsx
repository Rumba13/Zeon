import { ReactNode } from "react";
import "./breadCrumbs.scss";

type PropsType = {
    children: ReactNode[] | ReactNode
}

const separator = ">"

export default function BreadCrumbs({ children }: PropsType) {

    return <div className="bread-crumbs">{
        Array.isArray(children)
            ? children.map((child, index) =>
                (index === children.length - 1)
                    ? <>{child}</>
                    : <>{child}{separator}</>
            )
            : void 0
    }</div>
}