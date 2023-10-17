type  PropsType = {
    icon: string,
    className?: string
}

export function PaymentMethod({icon, className}: PropsType) {
    return <img className={className || "payment-method"} src={icon} alt=""/>
}
