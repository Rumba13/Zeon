import "./linkListItem.scss";

type PropsType = {
    children: string,
    href: string,
    className?: string
}

export default function LinkListItem({ children, href, className }: PropsType) {
    return <li className={`link-list-item ${className ?? ""}`}>
        <a className="link-list-item__link" href={href}>{children}</a>
    </li>
}