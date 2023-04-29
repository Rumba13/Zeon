import React from "react"
import "./phoneNumber.scss"

type PropsType = {
    number: string,
    icon?:React.ReactNode
}

export function convertPhoneNumber(number: string) {
    let template = "+xxx (xx) x-xxx-xxx";

    for (let i = 0; template.includes('x'); i++) {
        template = template.replace('x', number[i]);
    }
    
    return template;
}

export default function PhoneNumber({  icon,number }: PropsType) {
    return <a href={`tel:${number}`} className="phone-number">
        {icon}
        <span className="phone-number__text">{convertPhoneNumber(number)}</span>
    </a>
}

