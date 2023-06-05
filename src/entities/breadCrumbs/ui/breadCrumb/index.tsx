import "./styles.scss";
import { Link } from "react-router-dom";

type PropsType = {
    to: string,
    children: React.ReactNode |  React.ReactNode[],
    isLast?: boolean
}

export type BreadCrumbType = {
    title: string,
    href: string
}

export function BreadCrumb({ to, children, isLast }: PropsType) {
    if (isLast) {
        return <span className="bread-crumb">{children}</span>
    }
    else {
        return <>
            <Link className="bread-crumb" to={to}>{children} </Link>
            &gt;
        </>
    }
}