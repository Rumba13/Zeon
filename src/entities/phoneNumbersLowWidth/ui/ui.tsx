import "./styles.scss";
import useBreakpoint from "../../../shared/lib/useBreakpoint";
import { useState } from "react";
import { TimeTable } from "../../timeTable";
import { PhoneNumbers } from "../../phoneNumbers";
import { Sprite } from "../../../shared/ui//sprite";

export function PhoneNumbersLowWidth() { //TODO refuck with atn-d? write HOC to select mobile or desktop component
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