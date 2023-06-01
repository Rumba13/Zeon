import "./styles.scss";

type PropsType = {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

export function BlurZone({ children, className = "" }: PropsType) {
    return <div className={`overflow-scroll-wrapper ${className}`}>
        <div className="overflow-scroll">
            {children}
        </div>
    </div>
}