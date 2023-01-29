import Icon from "../icon/icon";
import PhoneNumber from "../phoneNumber/phoneNumber";
import "./phoneNumbers.css";

export default function PhoneNumbers() {
    return <div className="phone-numbers-wrapper">
        <PhoneNumber number="375447300500" child={<Icon sprite={{yOffset:-721}}/>} />
        <PhoneNumber number="375255300500" child={<Icon sprite={{yOffset:-354}}/>} />
        <PhoneNumber number="375257300500" child={<Icon sprite={{yOffset:-771}}/>} />
        <PhoneNumber number="375232300500" child={<Icon sprite={{yOffset:-423}}/>} />
    </div>

}