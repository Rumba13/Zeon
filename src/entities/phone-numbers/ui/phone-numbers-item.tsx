import "./styles.scss"
import { formatPhone } from "./formatPhone"

type PropsType = {
    number: string,
    icon?:React.ReactNode
}

export function Phone({  icon,number }: PropsType) {
    return <a className="phone" href={`tel:${number}`}>
        {icon}
        <span className="phone__number">{formatPhone(number)}</span>
    </a>
}

