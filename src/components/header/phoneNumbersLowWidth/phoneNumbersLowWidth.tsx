import "./phoneNumbersLowWidth.scss";
import useBreakpoint from "../../../shared/useBreakpoint";
import PhoneNumbers from "../../phoneNumbers/phoneNumbers";
import Sprite from "../../sprite/sprite";
import { useState } from "react";
import { TimeTable } from "../../../entities/timeTable";

export default function PhoneNumbersLowWidth() {
    const adaptiveComponent = useBreakpoint(<></>);
    const [isPopupOpened, togglePopup] = useState<boolean>(true);

    adaptiveComponent.addBreakpoint(650,
        <div className="phone-numbers-low-width">
            <Sprite onClick={() => togglePopup(!isPopupOpened)} yOffset={-1032} className="phone-numbers-icon" />

            <div className={`phone-numbers-low-width-content ${isPopupOpened ? "opened" : ""}`}>
                <TimeTable />
                <PhoneNumbers />
            </div>
        </div>
    )

    return adaptiveComponent.getComponent();
}