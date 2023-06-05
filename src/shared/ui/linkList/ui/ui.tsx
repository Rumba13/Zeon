import "./styles.scss";

type PropsType = {
    children: React.ReactNode[] | React.ReactNode,
    title: string,
    className?: string,
    listClassName?:string
}

export function LinkList({ children, title, className,listClassName }: PropsType) {
    return <div className={`link-list ${className ?? ""}`}>
        <h2 className="link-list__title">{title}</h2>

        <ul className={`link-list__list ${listClassName ?? ""}`}>
            {children}
        </ul>
    </div>
}