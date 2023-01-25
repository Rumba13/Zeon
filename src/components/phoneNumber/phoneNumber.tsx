import IconText from "../iconText/iconText"
import "./phoneNumber.css"

type PropsType = {
    icon?: string,
    number: string
}

export default function PhoneNumber({ icon, number }: PropsType) {
    return <IconText className="phone-number" icon={icon}  text={number} link={`tel:${number}`} />
}