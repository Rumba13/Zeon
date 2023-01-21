import PhoneNumber from "../phoneNumber/phoneNumber";
import "./phoneNumbers.css";

export default function PhoneNumbers() {
    return <div className="phone-numbers-wrapper">
        <PhoneNumber number="+375 (44) 7-300-500" icon="" />
        <PhoneNumber number="+375 (25) 5-300-500" icon="" />
        <PhoneNumber number="+375 (25) 7-300-500" icon="" />
        <PhoneNumber number="+375 (232) 300-500" icon="" />
    </div>

}