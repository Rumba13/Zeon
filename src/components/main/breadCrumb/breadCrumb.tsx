import { Link } from "react-router-dom";
import "./breadCrumb.scss";

type PropsType = {
    to:string,
    children:React.ReactNode
}

export default function BreadCrumb({to, children}:PropsType) {
    return to 
    ? <Link className="bread-crumb" to={to}>{children}</Link>
    : <span className="bread-crumb">{children}</span>
}