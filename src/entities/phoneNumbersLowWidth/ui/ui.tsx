import "./styles.scss";
import useBreakpoint from "../../../shared/lib/use-breakpoint";
import { useState } from "react";
import { Sprite } from "../../../shared/ui/sprite/ui";
import { PhoneNumbers } from "../../phone-numbers";
import { TimeTable } from "../../time-table";

export function PhoneNumbersLowWidth() { //TODO refuck write HOC to select mobile or desktop component
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