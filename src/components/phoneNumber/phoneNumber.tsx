import "./phoneNumber.css"

type PropsType = {
    icon?: string,
    number: string
}

export default function PhoneNumber({ icon, number }: PropsType) {
    return <a className="phone-number" href={`tel:${number}`}>
        <img src={icon} alt="" className="phone-number__icon" />
        <span className="phone-number__number">{number}</span>
    </a>
}