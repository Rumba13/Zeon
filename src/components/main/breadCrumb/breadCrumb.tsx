import { Link } from "react-router-dom";
import "./breadCrumb.scss";
import BreadCrumbSeparator from "./breadCrumbSeparator/breadCrumbSeparator";

type PropsType = {
    to: string,
    children: React.ReactNode,
    isLast?: boolean
}

export default function BreadCrumb({ to, children, isLast }: PropsType) {
    if (isLast) {
        return <span className="bread-crumb">{children}</span>
    }
    else {
        return <>
            <Link className="bread-crumb" to={to}>{children} </Link>
            <BreadCrumbSeparator />
        </>
    }
}