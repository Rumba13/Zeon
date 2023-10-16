import "./styles.scss";
import {useState} from "react";
import {Sprite} from "../../../shared/ui/sprite/ui";
import {TimeTable} from "../../time-table";
import {Phone} from "../../phone-numbers/ui/phone-numbers-item";
import {PhoneType} from "../../../shared/api/types/phone-type";

type PropsType = {
    phones: PhoneType[]
}

export function PhonesSmallScreen({phones}: PropsType) {
    const [isPopupOpened, setIsPopupOpened] = useState<boolean>(true);

    return <div className="phones-small-screen">
        <Sprite className="phones-icon" yOffset={-1032} onClick={() => setIsPopupOpened(!isPopupOpened)}/>

        <div className={`content ${isPopupOpened ? "opened" : ""}`}>
            <TimeTable/>

            <div className="phones">
                {phones.map(phone => <Phone number={phone.number} icon={phone.icon}/>)}
            </div>
        </div>
    </div>
}