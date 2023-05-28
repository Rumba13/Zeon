import "./styles.scss";
import { Link } from "react-router-dom";

type PropsType = {
    type: string,
    manufacturer: string,
    batch: string,
    href: string,
    className?:string
}

export function ProductTitle({ href, type, manufacturer, batch, className }: PropsType) {
    return <Link className={className ?? ""} to={href}>{manufacturer}{type}{batch}</Link>;
}