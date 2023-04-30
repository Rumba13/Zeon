import "./phoneNumbersLowWidth.scss";
import useBreakpoint from "../../../app/hooks/useBreakpoint";
import PhoneNumbers from "../../phoneNumbers/phoneNumbers";
import Timetable from "../timetable/timetable";
import Icon from "../../icon/icon";
import Sprite from "../../sprite/sprite";
import usePopup from "../../../app/hooks/usePopup";
import { useState } from "react";

export default function PhoneNumbersLowWidth() {
    const adaptiveComponent = useBreakpoint(<></>);
    const [isPopupOpened, togglePopup] = useState<boolean>(true);

    adaptiveComponent.addBreakpoint(650,
        <div className="phone-numbers-low-width">
            <Sprite onClick={() => togglePopup(!isPopupOpened)} yOffset={-1032} className="phone-numbers-icon" />

            <div className={`phone-numbers-low-width-content ${isPopupOpened ? "opened" : ""}`}>
                <Timetable />
                <PhoneNumbers />
            </div>
        </div>
    )

    return adaptiveComponent.getComponent();
}