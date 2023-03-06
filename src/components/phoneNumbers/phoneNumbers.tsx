import PhoneNumber from "./phoneNumber/phoneNumber";
import "./phoneNumbers.scss";
import Sprite from "../sprite/sprite";

export default function PhoneNumbers() {
    return <div className="phone-numbers-wrapper">
        <PhoneNumber number="375447300500" childBefore={<Sprite yOffset={-721}/>} />
        <PhoneNumber number="375255300500" childBefore={<Sprite yOffset={-354}/>} />
        <PhoneNumber number="375257300500" childBefore={<Sprite yOffset={-771}/>} />
        <PhoneNumber number="375232300500" childBefore={<Sprite yOffset={-423}/>} />
    </div>
}