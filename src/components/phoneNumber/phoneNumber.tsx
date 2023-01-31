import React from "react"
import "./phoneNumber.css"

type PropsType = {
    number: string,
    childBefore?:React.ReactNode
}

export default function PhoneNumber({  childBefore,number }: PropsType) {
    return <a href={`tel:${number}`} className="phone-number">
        {childBefore}
        <span className="phone-number__text">{convertPhoneNumber(number)}</span>
    </a>
}

export function convertPhoneNumber(number: string) {
    let template = "+xxx (xx) x-xxx-xxx"

    for (let i = 0; template.includes('x'); i++) {
        template = template.replace('x', number[i])
    }
    
    return template;
}