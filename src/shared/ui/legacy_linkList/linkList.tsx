import "./linkList.scss";

type PropsType = {
    children: JSX.Element[],
    title: string,
    className?: string
}

export default function LinkList({ children, title, className }: PropsType) {
    return <div className={`link-list ${className ?? ""}`}>
        <h2 className="link-list__title">{title}</h2>

        <ul className={`link-list__list ${className ?? ""}`}>
            {children}
        </ul>
    </div>
}