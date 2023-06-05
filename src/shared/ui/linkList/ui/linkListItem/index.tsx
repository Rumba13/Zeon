import "./styles.scss";

type PropsType = {
    children: React.ReactNode,
    href: string,
    className?: string
}

export function LinkListItem({ children, href, className }: PropsType) {
    return <li className={`link-list-item ${className ?? ""}`}>
        <a className="link-list-item__link" href={href}>{children}</a>
    </li>
}