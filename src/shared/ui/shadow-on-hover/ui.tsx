import "./styles.scss";

type PropsType = {
    children: React.ReactNode,
    className?: string
}

export function ShadowOnHover({ children, className}: PropsType) {
    return <div className={`shadow-on-hover ${className ?? ""}`}>
        {children}
    </div>
}