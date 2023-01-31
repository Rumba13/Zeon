import "./maxWidth"

type PropsType = {
    maxWidth:number,
    children:React.ReactNode
}

export default function MaxWidth({maxWidth, children}:PropsType) {
    return <div className="_max-width" style={{maxWidth}}>{children}</div>
}