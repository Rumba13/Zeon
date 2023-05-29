import "./styles.scss";

type PropsType = {
    children: React.ReactNode,
    link: string,
    className?: string
}

export function SubHeaderItem({ link, children, className = "" }: PropsType) {
    return <li className={`sub-header-menu-item ${className}`}>
        <a href={link} className="item__text">
            {children}
        </a>
    </li>
}