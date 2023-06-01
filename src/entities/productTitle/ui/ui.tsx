import "./styles.scss";
import { Link } from "react-router-dom";

type PropsType = {
    type: string,
    manufacturer: string,
    batch: string,
    href?: string,
    className?: string
}

export function ProductTitle({ href, type, manufacturer, batch, className }: PropsType) {
    const title = `${manufacturer ?? ""} ${type ?? ""} ${batch ?? ""}` //TODO separate to lib function

    if (!href) {
        return <span className={className ?? ""} >{title}</span>;
    }

    return <Link className={className ?? ""} to={href}>{title}</Link>;
}