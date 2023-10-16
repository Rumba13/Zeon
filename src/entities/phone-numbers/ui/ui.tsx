import "./styles.scss";
import {Sprite} from "../../../shared/ui/sprite/ui";
import {Phone} from "./phone-numbers-item";
import {PhonesSmallScreen} from "../../phoneNumbersLowWidth";
import {useScreenWidth} from "../../../shared/lib/use-screen-width";
import {PhoneType} from "../../../shared/api/types/phone-type";

const phones: PhoneType[] = [
    {number: "375447300500", icon: <Sprite yOffset={-721}/>},
    {number: "375255300500", icon: <Sprite yOffset={-354}/>},
    {number: "375257300500", icon: <Sprite yOffset={-771}/>},
    {number: "375232300500", icon: <Sprite yOffset={-423}/>},
]

export function Phones() {
    const screenWidth = useScreenWidth();

    if (screenWidth < 650) {
        return <PhonesSmallScreen phones={phones}/>;
    } else {
        return <div className="phones">
            {phones.map(phone => <Phone number={phone.number} icon={phone.icon}/>)}
        </div>
    }
}