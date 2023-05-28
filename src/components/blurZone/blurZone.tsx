import "./blurZone.scss";

type PropsType = {
    children: React.ReactNode | React.ReactNode[],
    className?:string
}

export default function BlurZone({ children, className = "" }: PropsType) {
    return <div className={`overflow-scroll-wrapper ${className}`}>
        <div className="overflow-scroll">
            {children}
        </div>
    </div>
}