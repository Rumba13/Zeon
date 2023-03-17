import "./listItem.scss";
import { ReactNode } from "react";

type PropsType = {
    href?: string,
    children: ReactNode | ReactNode[]
}

export default function ListItem({ href = "##", children }: PropsType) {
    return <li className="list-item">
        <a className="list-item__link" href={href}>{children}</a>
    </li>
}