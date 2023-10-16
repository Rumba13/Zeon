import "./styles.scss";

type PropsType = {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

export function BlurZone({ children, className = "" }: PropsType) { //TODO REFUCK
    return <div className={`overflow-scroll-wrapper ${className}`}>
        <div className="overflow-scroll">
            {children}
        </div>
    </div>
}