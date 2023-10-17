import "./styles.scss";

type PropsType = {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

export function BlurZone({ children, className = "" }: PropsType) {
    return <div className={`blur-zone ${className}`}>
        <div className="scroll">
            {children}
        </div>
    </div>
}