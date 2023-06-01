import "./styles.scss"
import { formatPhone } from "./formatPhone"

type PropsType = {
    number: string,
    icon?:React.ReactNode
}

export function PhoneNumber({  icon,number }: PropsType) {
    return <a href={`tel:${number}`} className="phone-number">
        {icon}
        <span className="phone-number__text">{formatPhone(number)}</span>
    </a>
}

