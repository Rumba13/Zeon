import "./phoneNumber.css"

type PropsType = {
    number: string,
    child?:any
}

export default function PhoneNumber({  child,number }: PropsType) {
    return <a href={`tel:${number}`} className="phone-number">
        {child}
        <span className="phone-number__text">{convertPhoneNumber(number)}</span>
    </a>
}

function convertPhoneNumber(number: string) {
    let template = "+xxx (xx) x-xxx-xxx"

    for (let i = 0; template.includes('x'); i++) {
        template = template.replace('x', number[i])
    }
    
    return template;
}