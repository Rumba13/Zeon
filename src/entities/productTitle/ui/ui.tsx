import "./styles.scss";
import { formatTitle } from "./formatTitle";
import { Link } from "react-router-dom";

type PropsType = {
    type: string,
    manufacturer: string,
    batch: string,
    href?: string,
    className?: string
}

export function ProductTitle({ href, type, manufacturer, batch, className }: PropsType) {
    const title = formatTitle(manufacturer, type, batch);

    if (!href) {
        return <span className={className ?? ""} >{title}</span>;
    }

    return <Link className={className ?? ""} to={href}>{title}</Link>;
}