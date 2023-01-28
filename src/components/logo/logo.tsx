import  darkLogo from "../../images/darkLogo.svg"
import whiteLogo from "../../images/whiteLogo.svg"

import "./logo.css"

export type LogoColors = "white" | "dark";

type PropsType = {
    color?: LogoColors,
}

function getLogo(color: LogoColors):string {
    switch (color) {
        case "dark":
            return darkLogo
        case "white":
            return whiteLogo
    }
}

export default function Logo({ color = "dark" }: PropsType) {
    return <div className="logo">
        <img src={getLogo(color)} alt="" />
    </div>
}