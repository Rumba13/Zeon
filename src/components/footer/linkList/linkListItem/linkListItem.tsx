import "./linkListItem.scss";

type PropsType = {
    children:string,
    href:string
}

export default function LinkListItem({children, href}:PropsType) {
    return <li className="link-list-item">
        <a className="link-list-item__link" href={href}>{children}</a>
    </li>
}